import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Product } from '../shared/product';
import { Category } from '../shared/category';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: Product[] = []; 
  // [
  //   {
  //     id: "01", name: "Carro juguete", price: 500, url: 'https://res.cloudinary.com/dqtjwc0fr/image/upload/v1643328834/Ciberseguridad/Productos/photo-1581235720704-06d3acfcb36f_mlmcpr.jpg', desc: 'Es un objeto a la venta', categories: ["Jugeteria"]
  //   },
  //   {
  //     id: "02", name: "Maceta", price: 120, url: 'https://res.cloudinary.com/dqtjwc0fr/image/upload/v1643328811/Ciberseguridad/Productos/photo-1485955900006-10f4d324d411_fy2kco.jpg', desc: 'Es un objeto a la venta', categories: ["Hogar"]
  //   },
  //   {
  //     id: "03", name: "Zapato verde", price: 650, url: 'https://res.cloudinary.com/dqtjwc0fr/image/upload/v1643328786/Ciberseguridad/Productos/photo-1560343090-f0409e92791a_mwpgzl.jpg', desc: 'Es un objeto a la venta', categories: ["Calzado"]
  //   },
  //   {
  //     id: "04", name: "Camara retro", price: 4000, url: 'https://res.cloudinary.com/dqtjwc0fr/image/upload/v1643328743/Ciberseguridad/Productos/photo-1526170375885-4d8ecf77b99f_ioufch.jpg', desc: 'Es un objeto a la venta', categories: ["Hogar"]
  //   },
  //   {
  //     id: "05", name: "Tenis rojo", price: 700, url: 'https://res.cloudinary.com/dqtjwc0fr/image/upload/v1643328732/Ciberseguridad/Productos/photo-1542291026-7eec264c27ff_cz8nqq.jpg', desc: 'Es un objeto a la venta', categories: ["Calzado"]
  //   },
  //   {
  //     id: "06", name: "Banco", price: 200, url: 'https://res.cloudinary.com/dqtjwc0fr/image/upload/v1643328715/Ciberseguridad/Productos/photo-1503602642458-232111445657_iacxa9.jpg', desc: 'Es un objeto a la venta', categories: ["Hogar"]
  //   },
  //   {
  //     id: "07", name: "Labial", price: 350, url: 'https://res.cloudinary.com/dqtjwc0fr/image/upload/v1643328698/Ciberseguridad/Productos/photo-1586495777744-4413f21062fa_u0famz.jpg', desc: 'Es un objeto a la venta', categories: ["Hogar"]
  //   },
  // ];
  
  categorySelected: string = "Todo";

  categories: Category[] = [];

  selectCategory(category: string){
    this.categorySelected = category;
    this.categoriesOpen = false;
  }

  categoriesOpen: boolean = false;

  toggleCategories(){
    this.categoriesOpen = !this.categoriesOpen;
  }

  constructor(public restApi: RestApiService, ) { }

  loadProducts(){
    return this.restApi.getProducts().subscribe((data: any) => {this.products = data;})
  }

  loadCategories(){
    return this.restApi.getCategories().subscribe((data: any) => {this.categories = data;})
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

}
