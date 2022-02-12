import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public restApi: RestApiService, public router: Router ) { }

  user: User = {
    username: '',
    password: ''
  };

  signIn(){
    this.restApi.signIn(this.user).subscribe((data: User) => {
      data.token ? this.router.navigate(['/']) : ""
    })
  }

  ngOnInit(): void {
    
  }

}
