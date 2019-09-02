import { Component, OnInit } from '@angular/core';
import {Rent} from '../interfaces/rent';
import {RentService} from '../service/RentService';
import {Subscription} from "rxjs/Rx";
import {User} from "../../authentication/models/user.model";
import {AuthService} from "../../authentication/service/auth.service";
import {passBoolean} from "protractor/built/util";

@Component({
  selector: 'app-list-rent',
  templateUrl: './list-rent.component.html',
  styleUrls: ['./list-rent.component.css']
})
export class ListRentComponent implements OnInit {
  rents: Rent[];
  subUser: Subscription;
  user: User;

  constructor(private rentService: RentService, private authService: AuthService) { }

  ngOnInit() {



    this.subUser = this.authService.userActual.subscribe( () => {
      this.user = this.authService.currentUserValue;
    });

    if (this.user == null) {
      let uname = localStorage.getItem("username");
      let psw = localStorage.getItem("password");
      console.log(uname);
      console.log(psw);
      if(uname != null && psw != null) {
        this.user = {
          username: uname,
          password: psw
        };
      }
    }

    this.rents = this.rentService.getRents();
  }

  ngAfterViewInit(): void {


  }


}
