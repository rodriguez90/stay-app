import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService1} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent1 implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService1) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      e_email: ['', Validators.required, Validators.email ],
      password: ['', Validators.required]
    });
  }

  //get f() { return this.loginForm.controls; }

  onSubmit() {
    this.authService.login( {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
        }
    );

  }



}
