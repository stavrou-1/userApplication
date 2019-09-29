import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://todolistapi2.herokuapp.com/register";
  private _loginUrl = "https://todolistapi2.herokuapp.com/login";

  constructor(private http: HttpClient,
              private _router: Router,
              private store: Store<any>) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getAllState() {
    return this.store.select('appReducer');
  }

}
