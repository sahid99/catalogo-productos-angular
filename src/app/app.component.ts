import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catalogo-productos-angular';

  isAuthenticated(){
    if(this.authService.getAuthStatus()){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.authService.deleteToken();
  }

  constructor(
    private authService: AuthService) { }
}
