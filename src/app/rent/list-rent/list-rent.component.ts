import { Component, OnInit } from '@angular/core';
import {Rent} from '../interfaces/rent';
import {RentService} from '../../core/services/rentService';
import {Subscription} from 'rxjs/Rx';
import {User} from '../../authentication/models/user.model';
import {AuthService} from '../../core/services/auth.service';
import {ActivatedRoute} from '@angular/router';


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

    /*
    this.subUser = this.authService.userActual.subscribe( () => {
      this.user = this.authService.currentUserValue;
    });
*/
    if (this.user == null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }



}
