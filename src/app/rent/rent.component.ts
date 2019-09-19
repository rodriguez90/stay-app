import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Rent} from "./interfaces/rent";
import {ActivatedRoute} from "@angular/router";
import {RentService} from '../core/services/rentService';
import {User} from "../authentication/models/user.model";


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  @Input() rent: Rent;
  user: User;


  constructor(private route: ActivatedRoute,
              private rentService: RentService) { }

  ngOnInit() {
    if (this.user == null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

}
