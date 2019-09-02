/**
 * Created by yopt on 07/11/2018.
 */
import {Subject} from 'rxjs';

export class ProductsService {
    products = ['A Book', 'A Book1', 'A Book2'];
    productsUpdated = new Subject();

    addProduct(productName: string) {
        this.products.push(productName);
        this.productsUpdated.next();
    }

    getProducts() {
        return [...this.products];
    }

    DeleteProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
        this.productsUpdated.next();
    }
    }