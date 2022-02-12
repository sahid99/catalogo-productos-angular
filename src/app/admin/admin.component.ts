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
      this.categories = data;
    })
  }

  createProductShell(){
    this.selectedProduct = {
      id: undefined,
      name: '',
      price: 0,
      url: '',
      description: '',
      category: ''
    }
  }

  saveProduct(){
    if(this.selectedProduct){
      if(this.selectedProduct.id){
        return this.restApi.modifyProduct(this.selectedProduct).subscribe((data: any) => {
          this.products = data;
          this.selectedProduct = null;
        })
      }
      else{
        return this.restApi.addProduct(this.selectedProduct).subscribe((data: any) => {
          this.products = data;
          this.selectedProduct = null;
        })
      }
    }
    return null;
  }

  deleteProduct(product: Product){
    return this.restApi.deleteProduct(product).subscribe((data: any) => {
      this.products = data;
      this.selectedProduct = null;
    })
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

}
