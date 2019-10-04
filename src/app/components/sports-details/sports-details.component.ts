import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.component.html',
  styleUrls: ['./sports-details.component.scss']
})
export class SportsDetailsComponent implements OnInit {

  sportsDetails: Object;
  statisticsHeader: 'Statistics';
  editing: Boolean;
  color: 'green';

  constructor(public data: DataService, 
              private route: ActivatedRoute,
              private _router: Router,
              private _authService: AuthService) {
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
      const confirmValue = prompt("Are you sure you want to deleted this entry? Type Yes to continue.");
      let doesProceed = false;

      if (!confirmValue) return;
      
      else if (confirmValue === 'yes' || confirmValue === 'Yes') {
        doesProceed = true;
      }
      if (doesProceed) {
        this.data.deleteSport(theId)
        .subscribe(
          res => {
            console.log(res + ' was deleted!');
            this._router.navigate(['/sports']);
          },
          err => {
            console.log(err + ' occurred. Failed to delete object.');
          });
      }
    })
  }

  registerHandler(event) {
    alert(event.target);
  }


}
