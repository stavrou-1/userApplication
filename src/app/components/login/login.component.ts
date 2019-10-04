import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ACTION_LOGIN } from '../../store/actions/appActions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: object = {};

  constructor(private _auth: AuthService, 
              private _router: Router,
              private store: Store<any>) { }

  ngOnInit() {
  }

  loginUser() {
    const serializedData = JSON.stringify(this.loginUserData);
    return this._auth.loginUser(serializedData)
      .subscribe(
        (res: any) => {
          if (res) {
            this.store.dispatch({
              type: ACTION_LOGIN,
              payload: res.name
            });
            localStorage.setItem('token', JSON.stringify(res.token));
            this._router.navigate(['/sports']);
          }
        },
        (err: any) => {
          if (err) {
            console.log(err.error)
          }
        }
      );
  }

}
