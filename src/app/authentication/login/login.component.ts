// angular imports
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {AuthService} from '../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

  isVisible = false;

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;
  error = '';
  hasError = false;
  appName = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
     //private jwtService: JwtService,
     // private overlayService: OverlayService,
      ) { }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    /*SI EXISTE UN TOKEN SETEADO TE REDIRECCIONA AL DASHBOARD*/
    // if (this.jwtService.getToken()) {
    //   this.router.navigate([this.returnUrl]);
    // }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.appName = "Stay In Cuba";
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    if (!this.submitted) {
      this.submitted = true;
      this.loading = true;
      // const pass = this.crypto.encode(this.f.password.value);
      const email = this.f.email.value;
      const i =  email.indexOf('@', email);
      const usename = email.substring(0, i);
      const pass = this.f.password.value;

      this.authService.login(usename, pass).subscribe(user => {
            this.submitted = false;
            this.loading = false;
            this.authService.setCurrentUser(user);
            this.authService.loggedInSubject.next(true);
            localStorage.setItem('user', JSON.stringify(user) );

            this.router.navigate(['']);

          },
          error => {
            console.log('error', error);
            this.error = error;
            this.hasError = true;
            this.submitted = false;
            this.loading = false;
          });
    }
  }

  onKey() {
    this.onSubmit();
  }

  isFieldInvalid(field: string) {
    return (
        (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
        (this.loginForm.get(field).untouched && this.loading)
    );
  }

}
