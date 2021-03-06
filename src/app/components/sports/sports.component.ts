import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { FETCH_TEAM } from '../../store/actions/appActions';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports: Object;
  stateMessage = 'Loading...';

  constructor(private data: DataService,
              private _router: Router) {
  }

  ngOnInit() {
    this.data.getSports().subscribe(
      data => {
        this.data.updateTeamState({
          action: FETCH_TEAM,
          payload: data
        })
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
          else if (err.status === 500) {
          // then we have an invalid token
          alert('Nice try! That token will not work.');
          this._router.navigate(['/login']);
          }
        }
      }
    );
    this.loadTeamStates();
  }

  loadTeamStates() {
    this.data.getTeamState().subscribe(state => {
      console.log(state);
      this.sports = state.team;
      //state.createTeamReducer()
    })
  }

}
