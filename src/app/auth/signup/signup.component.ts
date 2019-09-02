import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService1} from '../auth.service';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private  authService: AuthService1) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.registerUser({
        email: form.value.email,
        password: form.value.password
      })
  }
}

}