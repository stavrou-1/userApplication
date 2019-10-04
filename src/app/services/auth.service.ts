import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

interface loginInterface {
  name?: string,
  email: string,
  password: string,
  token?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private rootUrl: string = "https://guarded-beach-46455.herokuapp.com/api";
  private rootUrl: string = "http://localhost:3000/api";
  private registerUrl = this.rootUrl + "/user/register";
  private loginUrl = this.rootUrl + "/user/login";
  private headers = new HttpHeaders({ 
    'Content-Type': 'application/json', 
    'responseType': 'text' });

  constructor(private http: HttpClient,
              private _router: Router,
              private store: Store<any>) {
                console.log(this.loginUrl)
              }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user: string): Observable<loginInterface[]> {
    return this.http.post<loginInterface[]>(this.loginUrl, user, { 
      headers: this.headers });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'))
  }

  getAllState() {
    return this.store.select('appReducer');
  }

}
