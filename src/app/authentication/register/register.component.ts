import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {MatSnackBar} from "@angular/material";
import {User} from '../models/user.model';
import {Person} from '../../../../projects/Api/lib/models';
import {AuthService} from '../../core/services';

const password = new FormControl('', [Validators.required, Validators.minLength(8)]);
const confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  user: User;
  person: Person = {
    secondName: '',
    secondLastName: '',
    identification: '',
    phoneNumber: '',
    address: '',
    isActive: true,
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    }
  };



  constructor(private fb: FormBuilder,
              private router: Router,
              public snackBar: MatSnackBar,
              private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  onSubmit(f) {
    const email = f.controls.email.value;
    const i =  email.indexOf('@', email);
    const usename = email.substring(0, i);

    /*
    this.user = {
      email: email,
      username: usename,
      password: f.controls.password.value
    };*/


      this.person.user.email = email;
      this.person.user.username = usename;
      this.person.user.password = this.form.value['password'];


    //this.person.user.firstName = this.form.value['firstName'];
    //this.person.user.lastName = this.form.value['lastName'];
    //this.person.identification = this.form.value['identification'];
    // this.person.user.password = this.crypto.encode(this.password);
    console.log(this.person);
    this.authService.register(this.person).subscribe((response: Person) => {
            console.log("OK...")
           this.router.navigate(['']);
          this.snackBar.open('message', 'action', {
            duration: 1000
          });

        },
        error => {
          console.log(error);
        });
   // console.log(this.user);
  }
}








