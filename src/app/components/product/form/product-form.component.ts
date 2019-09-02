import { Component, OnInit, Output} from '@angular/core';

import {ProductsService} from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductComponent implements OnInit {





  constructor(private pService: ProductsService) {
    /*
    setTimeout(() => {
      this.productName = 'Otro product';
      }, 3000);
      */
  }


  ngOnInit() {



  }




  onAddProduct(form) {
    if (form.valid) {
      this.pService.addProduct(form.value.productName);
      }
  }


}
