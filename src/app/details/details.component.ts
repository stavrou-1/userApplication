import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  apiDetailsObject: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.apiDetailsObject = params.id);
  }

  ngOnInit() {
    this.data.getUser(this.apiDetailsObject)
    .subscribe(data => this.apiDetailsObject = data);
  }
}
