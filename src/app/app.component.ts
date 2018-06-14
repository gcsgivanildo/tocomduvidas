import { Component } from '@angular/core';
import { AuthService } from './seguranca/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  token: string;
  name: string;
  email: string;
  imageURL: string;

  constructor(authService: AuthService) {

    this.token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.imageURL = localStorage.getItem('image');

    /*
     *console.log(localStorage.getItem('name'));
     */
    // console.log("ops",token);
  }
}
