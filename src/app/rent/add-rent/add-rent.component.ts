import { Component, OnInit, Pipe } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import {Location} from '@angular/common';

import {CustomValidators} from 'ng2-validation';

import {
  Service,
  Rent
} from '../../../../projects/Api/lib/models';
import {User} from '../../authentication/models/user.model';
import {AuthService} from '../../core/services/http/auth.service';
import {RentService} from '../../core/services/http/rent.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FicheroModelo} from '../../../../projects/fbs-shared/src/lib/models';
import {BehaviorSubject} from 'rxjs';

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
  allServices: Service[];
  update: boolean;
  user: User;
  imageToUpload: File = null;
  images: FicheroModelo[] = [];
  uploadedFilesSubject = new BehaviorSubject<any>(null);
  uploadedFiles$ = this.uploadedFilesSubject.asObservable();

  constructor(private fb: FormBuilder,
              private rentService: RentService,
              private authService: AuthService,
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

    this.rentService.serviceList().subscribe(services => {
      console.log('services', services);
      this.allServices = services;
    });

    this.user = this.authService.currentUser;



    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id != 0) {
      this.currentModel = this.rentService.getRent(this.id);
      this.update = true;
      this.form.controls['name'].setValue(this.currentModel.name);
      this.form.controls['email'].setValue(this.currentModel.email);
      this.form.controls['price'].setValue(this.currentModel.price);
      this.form.controls['phone'].setValue(this.currentModel.phone);
      this.form.controls['address'].setValue(this.currentModel.adress);
      this.form.controls['description'].setValue(this.currentModel.description);
      this.imageUrl = this.currentModel.image;
    }

  }


  onFileSelected(files) {
    if (files.length === 0) {
      return;
    }

    this.imageToUpload =  files[0] as File;

    const reader = new FileReader();
    reader.readAsDataURL(this.imageToUpload);
    reader.onload = () => {
      this.imageUrl = reader.result.toString();
    }
  }

  onFilesSelected(files: any) {
    if (files.length === 0) { return; }

    // @ts-ignore
    for (const file: File of files) {
      const mimeType = file.type;
      if (mimeType.match(/image\/*/) == null) {
        continue;
      }

      if (file.size / 1024 > 1024 ) {
        // TODO notifiy error
        continue;
      }

      const reader = new FileReader();
      reader.onload = (_event) => {
        const image: FicheroModelo = {
          id: null,
          path: reader.result,
          file: file
        };
        this.images.push(image);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    let value = this.form.value;

    if (this.currentModel == null) {
      this.currentModel =  {name: '', description: '', price: 0, phone: '', email: '', adress: ''};
    }

    if (value['name'] !== '') {
      this.currentModel.name = value['name'];
    }
    if (value['description'] !== '') {
      this.currentModel.description = value['description'];
    }
    if (value['price'] !== '') {
      this.currentModel.price = parseInt(value['price']);
    }
    if (value['phone'] !== '') {
      this.currentModel.phone = value['phone'];
    }
    if (value['email'] !== '') {
      this.currentModel.email = value['email'];
    }

    if (value['address'] !== '') {
      this.currentModel.adress = value['address'];
    }

    if (this.currentModel.id == null) {
      this.currentModel.user = this.user.id;
      this.currentModel.isActive = true;

      this.rentService.create(this.currentModel).subscribe((newRent: Rent) => {
        this.resetForm();
        this.router.navigate(['/rent/list'])
      });
    } else {
      this.rentService.update(this.currentModel).subscribe((newRent: Rent) => {
        this.resetForm();
      });
    }
  }


  resetForm() {
    this.form.reset();
    this.currentModel = null;
  }

  onCancel() {
    this.form.reset();
    this.location.back();
    /*
    if (this.update) {
        this.router.navigate(['rent/detailrent/' + this.currentModel.id]);
    } else {
        this.router.navigate(['/rent/list/' + this.currentModel.ownerid]);
    }*/
  }

  checkedService(item) {
    if (this.update) {
      const code = this.currentModel.services.find(x => x === item.id);

      if ( code ) {
        console.log(item.cssIcon);
        return 'checked';
      }
    }
    return '';
  }

  toggle(checkbox) {
    console.log(checkbox.css_icon);
  }

}
