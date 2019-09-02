import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  value1: number;
  value2: number;
  value3: number;


  constructor() { }

  ngOnInit() {
    this.value1 = 80;
    this.value2 = 90;
    this.value3 = 98;
  }

}
