  import { Component, OnInit, Pipe } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

  import {Location} from '@angular/common';

import {CustomValidators} from 'ng2-validation';
  import {Rent} from '../interfaces/rent';
  import {Service} from "../interfaces/service";
  import {RentService} from "../../core/services/rentService";
  import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit {
  public form: FormGroup;
  public imageUrl: string;
  currentModel: Rent = null;
  id: number;
  currenServices: Service[] = [];
  allServices: Service[];
  update: boolean;

  constructor(private fb: FormBuilder,
              private rentService: RentService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required
          //Validators.minLength(5),
          //Validators.maxLength(10)
        ])
      ],
      owner: [
        null,
        Validators.compose([
          Validators.required
        ])
      ],
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      price: [
        null,
        Validators.compose([
          Validators.required,
          CustomValidators.range([1, 100])
        ])
      ],
      phone: [
        null,
        Validators.compose([Validators.required, CustomValidators.phone('IN')])
      ],
      address: [
        null,
        Validators.required
      ],
      description: [
        null,
        Validators.required
      ]
    });

    this.allServices = this.rentService.getAllServices();

    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id != 0) {
      this.currentModel = this.rentService.getRent(this.id);
      this.update = true;
      this.form.controls['name'].setValue(this.currentModel.name);
      this.form.controls['owner'].setValue(this.currentModel.owner);
      this.form.controls['email'].setValue(this.currentModel.email);
      this.form.controls['price'].setValue(this.currentModel.price);
      this.form.controls['phone'].setValue(this.currentModel.phone);
      this.form.controls['address'].setValue(this.currentModel.address);
      this.form.controls['description'].setValue(this.currentModel.description);
      this.imageUrl = this.currentModel.img;
    }

  }


  onFileSelected(files) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload =  files[0] as File;

    const reader = new FileReader();
    reader.readAsDataURL(fileToUpload)
    reader.onload = () => {
      this.imageUrl = reader.result.toString();
    }

  }

  onSaveModel() {
    let value = this.form.value;
    if (value['name'] !== '') {
      this.currentModel.name = value['name'];
    }
    if (value['email'] !== '') {
      this.currentModel.email = value['email'];
    }
    if (value['owner'] !== '') {
      this.currentModel.owner = value['owner'];
    }
    if (value['owner'] !== '') {
      this.currentModel.owner = value['owner'];
    }
    if (value['phone'] !== '') {
      this.currentModel.phone = value['phone'];
    }
    if (value['address'] !== '') {
      this.currentModel.address = value['address'];
    }
    if (value['description'] !== '') {
      this.currentModel.description = value['description'];
    }

    if (this.currentModel && this.currentModel.id !== null) {//update

    }



  }

    onCancel() {
        this.form.reset();
        this.location.back();
        /*
        if (this.update) {
            this.router.navigate(['rent/detailrent/' + this.currentModel.id]);
        } else {
            this.router.navigate(['/rent/rents/' + this.currentModel.ownerid]);
        }*/
  }

  checkedService(item) {
    if (this.update) {
      const code = this.currentModel.services.find(x => x.code === item.code);

      if ( code ) {
        console.log(item.code);
        return 'checked';
      }
    }
    return '';
  }

  toggle(checkbox) {
    this.currenServices.push({code: checkbox});
    console.log(this.currenServices);
  }

}
