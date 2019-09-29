import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  greetMessage = "Hello Guest"
  logout = true
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    console.log(1);
    this._authService.getAllState().subscribe(state => {
      console.log(state);
      this.greetMessage = state.login ? 'Hello' + '\n' + state.user : 'Guest';
    })
  }

}
