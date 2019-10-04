import { Component } from '@angular/core';
import { Team } from '../../team';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  powers: object = ['Super Sonic Speeds', 'Genius Problem Solving', 'Weather Changer', 'Immortal Being'];
  model: object = new Team(18, '', '', '');
  submitted: boolean = false;
  pageTitle: string = 'Add a Team';

  constructor(private data: DataService, private _router: Router) { }

  onSubmit(teamForm: NgForm) {
    if (teamForm.valid) {
      this.data.createSportsPost(teamForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            if (data) {
              this._router.navigate(['/sports']);
            }
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newTeam() {
    this.model = new Team(42, '', '', '');
  }


}
