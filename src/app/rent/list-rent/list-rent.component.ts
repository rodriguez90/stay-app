import { Component, OnInit } from '@angular/core';

import {RentService} from '../../core/services/http/rent.service';
import {Subscription} from 'rxjs/Rx';
import {User} from '../../authentication/models/user.model';
import {AuthService} from '../../core/services/http/auth.service';
import {ActivatedRoute} from '@angular/router';
import {
  Rent
} from '../../../../projects/Api/lib/models';

@Component({
  selector: 'app-list-rent',
  templateUrl: './list-rent.component.html',
  styleUrls: ['./list-rent.component.css']
})
export class ListRentComponent implements OnInit {
  rents: Rent[];
  subUser: Subscription;
  user: User;
  ownerid: number;

  constructor(private rentService: RentService, private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ownerid = +this.route.snapshot.paramMap.get('ownerid');
    this.rents = this.rentService.getRents(this.ownerid);
    this.user = this.authService.currentUser;
  }
}
