import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.form = this.fb.group({

    });
  }

}
