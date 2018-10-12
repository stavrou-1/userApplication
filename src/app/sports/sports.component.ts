import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getSports().subscribe(data => this.sports = data);
  }

}
