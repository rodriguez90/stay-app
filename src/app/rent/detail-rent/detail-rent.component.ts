import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentService} from '../../core/services/http/rent.service';

import {User} from '../../authentication/models/user.model';
import {Location} from '@angular/common';

import {
  Service,
  Rent
} from '../../../../projects/Api/lib/models';

@Component({
  selector: 'app-detail-rent',
  templateUrl: './detail-rent.component.html',
  styleUrls: ['./detail-rent.component.css']
})
export class DetailRentComponent implements OnInit {
  id: number;
  rent: Rent;
  user: User;

  constructor(private route: ActivatedRoute,
              private rentService: RentService,
              private location: Location) {

  }

  ngOnInit() {

    if (this.user == null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.id =  +this.route.snapshot.paramMap.get('id');
    this.rent = this.rentService.getRent(this.id);
    console.log(this.id);


  }

  onCancel() {
    this.location.back();
  }

}
