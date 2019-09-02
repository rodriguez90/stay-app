import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {MatSnackBar} from "@angular/material";

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar) {}

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

  onSubmit() {

    this.snackBar.open("Sent Email...", "Notification", {
      duration: 6000
    });
    this.router.navigate(['/']);
  }
}
