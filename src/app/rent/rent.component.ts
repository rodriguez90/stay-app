import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Rent} from "./interfaces/rent";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  @Input() rent: Rent;



  constructor() { }

  ngOnInit() {
  }

}
