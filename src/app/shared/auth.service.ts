import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string  = '';

  constructor(private router: Router) { }

  getAuthStatus(){
    const token = localStorage.getItem('token');
    this.token = token ? token : '';
    return token;
  }

  getToken(){
    return this.token;
  }

  setToken(token: string){
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  deleteToken(){
    this.token = '';
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
