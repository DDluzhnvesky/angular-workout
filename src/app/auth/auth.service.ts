import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signinUser(email: string, password: string) {
    this.token = 'token';
  }

  logout() {
    this.token = null;
    this.router.navigate(['/signin'])
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
