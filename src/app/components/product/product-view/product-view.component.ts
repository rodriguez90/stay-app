import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {ProductsService} from '../service/product.service';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  constructor(private pService: ProductsService) { }

  ngOnInit() {
  }


  onClicked() {
    this.productClicked.emit();
  }



}
