import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { Product } from '../shared/product';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products: Product[] = []; 
  
  selectedProduct: Product | null = null; 

  categories: Category[] = [];

  constructor(public restApi: RestApiService, ) { }

  loadProducts(){
    return this.restApi.getProducts().subscribe((data: any) => {this.products = data;})
  }

  selectProduct(product: Product){
    this.selectedProduct = product;
  }

  loadCategories(){
    return this.restApi.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data;
    })
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

}
