import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { PostPlayers } from '../PostPlayers';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.scss']
})

export class EditTeamsComponent implements OnInit {

  teamId: Object;
  playersArray: any;
  playersObject: any;
  checklists: any;
  isFormReady: Boolean;
  error: String;
  teamForm: FormGroup;
  inspectionform: FormGroup;

  constructor(public data: DataService, 
    private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.params.subscribe(
      data => this.teamId = data.id,
      error => this.error = error);
  }

  ngOnInit():any {
 
    this.teamForm = this.fb.group({
      playersDetailsForm: this.fb.array([])/*,
      players: this.fb.array([])*/
    });

    this.data.getSportsDetails(this.teamId)
      .subscribe(data => {
        const container = [];
        // This is our raw data object this.playersObject
        this.playersObject = data;
        container.push(this.playersObject);

        const items = this.teamForm.get('playersDetailsForm') as FormArray;

        container.forEach(element => {

          //console.log(JSON.stringify(element.players,null,2));
          
          (items).push(this.fb.group({
            _id: [element._id],
            team: [element.team, Validators.required],
            history: [element.history, Validators.required],
            stateAbbr: [element.stateAbbr, Validators.required],
            state: [element.state],
            __v: [0],
            city: [element.city, Validators.required],
            arena: [element.arena, Validators.required],
            players: this.setProjects(element)
          }));
        });
      }, (error) => {
        this.error = error;
      });
  }

  setProjects(x) {
    let arr = new FormArray([])
    x.players.forEach(y => {
      arr.push(this.fb.group({
        name: y.name,
        teamNum: y.teamNum,
        position: y.position
      }))
    })
    return arr;
  }

  updateTeam(): void {
    // TODO Use EventEmitter form value
    console.warn(JSON.stringify(this.teamForm.value.playersDetailsForm[0],null,2));
  }


}
