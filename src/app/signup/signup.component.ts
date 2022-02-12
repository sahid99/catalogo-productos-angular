import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }

  constructor(public restApi: RestApiService, public router: Router ) { }

  signUp(){
    this.restApi.signUp(this.user).subscribe((data: User) => {
      data.token ? this.router.navigate(['/']) : ""
    })
  }

  ngOnInit(): void {
  }

}
