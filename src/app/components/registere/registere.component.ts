import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registere',
  templateUrl: './registere.component.html',
  styleUrls: ['./registere.component.scss']
})
export class RegistereComponent implements OnInit {

  registerUserData = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
   this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      err => console.log(err)
    );
  }

}
