import { Component, OnInit, OnDestroy} from '@angular/core';
import {ProductsService} from '../service/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products = [];
  private productsSubcription: Subscription;
  constructor(private pService: ProductsService) {

  }

  ngOnInit() {
    this.products =  this.pService.getProducts();
    this.productsSubcription = this.pService.productsUpdated.subscribe(() => {
      this.products = this.pService.getProducts();
    });
  }

  ngOnDestroy() {
    this.productsSubcription.unsubscribe();
  }


  onRemoveProduct(productName) {
    this.pService.DeleteProduct(productName);
  }

}
