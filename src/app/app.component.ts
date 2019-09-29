import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses: any[];
  title: string;
  greeting: string;
  constructor(private database: AngularFireDatabase,
              private _AuthService: AuthService) { }

  OnInit() {
    
  }
}
