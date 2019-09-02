import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentService} from "../service/RentService";
import {Rent} from "../interfaces/rent";
import {number} from "ng2-validation/dist/number";

@Component({
  selector: 'app-detail-rent',
  templateUrl: './detail-rent.component.html',
  styleUrls: ['./detail-rent.component.css']
})
export class DetailRentComponent implements OnInit {
  id: number;
  rent: Rent;

  constructor(private route: ActivatedRoute, private rentService: RentService) {

  }

  ngOnInit() {
    this.id =  +this.route.snapshot.paramMap.get('id');
    this.rent = this.rentService.getRent(this.id);
  }

}
