  import { Component, OnInit, Pipe } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';



import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit {
  public form: FormGroup;
  public imageUrl: string;

  constructor(private fb: FormBuilder) { }

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
      range: [
        null,
        Validators.compose([
          Validators.required,
          CustomValidators.range([1, 100])
        ])
      ],
      phone: [
        null,
        Validators.compose([Validators.required, CustomValidators.phone('IN')])
      ]
    });
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
}
