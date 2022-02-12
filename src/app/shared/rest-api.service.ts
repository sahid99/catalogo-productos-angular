import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaGlkIiwiaWF0IjoxNjQ0NTkwNzQ3LCJleHAiOjE2NDQ3NjM1NDd9.QXMg6QCzE0Pzc3hoWfGDindVlgyZ5x1QXJISqCOy6G8'
    })
  }  

  //Auth endpoints
  signIn(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + '/auth/signIn', user, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //Auth endpoints
  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + '/auth/signUp', user, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //Products endpoints
  // HttpClient API get() method => Fetch employees list
  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/products/getProducts', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API get() method => Fetch employee
  // getEmployee(id: string): Observable<Product> {
  //   return this.http.get<Product>(this.apiURL + '/employees/' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }  
  // HttpClient API post() method => Create employee
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL + '/products/addProduct', JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  // HttpClient API put() method => Update employee
  modifyProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL + '/products/modifyProduct', JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API delete() method => Delete employee
  deleteProduct(product: Product){
    return this.http.post<Product>(this.apiURL + '/products/deleteProduct', JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCategories(): Observable<Category> {
    return this.http.get<Category>(this.apiURL + '/categories/getCategories', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiURL + '/categories/addCategory', JSON.stringify(category), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  deleteCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiURL + '/categories/deleteCategory', JSON.stringify(category), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}