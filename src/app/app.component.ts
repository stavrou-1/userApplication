import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses: any[];
  title: string;
  greeting: string;
  constructor(database: AngularFireDatabase) {
    database.list('/courses').valueChanges()
      .subscribe(data => {
        this.courses = data;
      })
      this.title = 'some title';
  }

  OnInit() {
    console.log('done')
  }
}
