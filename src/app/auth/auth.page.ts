import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  private authenticated = false;

  get isAuthenticated() {
    return this.authenticated;
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogIn() {
    this.login();
  }

  login() {
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }

}
