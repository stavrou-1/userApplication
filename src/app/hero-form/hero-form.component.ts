import { Component } from '@angular/core';
import { Team } from '../team';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  powers = ['Super Sonic Speeds', 'Genius Problem Solving', 'Weather Changer', 'Immortal Being'];

  model = new Team(18, '', '', '', '', '');

  submitted = false;

  pageTitle = 'Add a Team';

  constructor(public data: DataService) {

  }

  onSubmit(teamForm: NgForm) {
    if (teamForm.valid) {
      this.data.createSportsPost(teamForm.value).subscribe(data => console.log(data));
    }
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newTeam() {
    this.model = new Team(42, '', '', '', '', '');
  }


}
