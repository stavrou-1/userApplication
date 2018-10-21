import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.component.html',
  styleUrls: ['./sports-details.component.scss']
})
export class SportsDetailsComponent implements OnInit {

  sportsDetails: Object;
  statisticsHeader: 'Statistics';
  editing: Boolean;

  constructor(public data: DataService, 
              private route: ActivatedRoute,
              private _router: Router) {
    this.route.params.subscribe(params => this.sportsDetails = params.id);
  }

  ngOnInit() {
    this.data.getSportsDetails(this.sportsDetails)
      .subscribe(data => this.sportsDetails = data);
  }

  get playersLength() {
    if (this.sportsDetails) {
      return 1;
    } else {
      return 0;
    }
  }

  deleteTeam() {
    this.route.params.subscribe(params => {
      const theId = params.id;
      console.log(theId);
      this.data.deleteSport(theId)
        .subscribe(res => {
          console.log(res + ' was deleted!');
          this._router.navigate(['/sports']);
        },
        err => {
          console.log(err + ' occurred. Failed to delete object.');
        });
    })
  }

  registerHandler(event) {
    alert(event.target);
  }


}
