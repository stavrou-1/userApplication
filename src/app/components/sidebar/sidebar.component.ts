import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ACTION_LOGOUT } from '../../store/actions/appActions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  greetMessage = "Hello Guest"
  logout = true
  constructor(private _authService: AuthService,
              private store: Store<any>) { }

  logOut = () => {
    this.store.dispatch({
      type: ACTION_LOGOUT,
      payload: this.greetMessage
    });
    this._authService.logoutUser();
  }

  ngOnInit() {
    this._authService.getAllState().subscribe(state => {
      this.greetMessage = state.login ? 'Hello' + '\n' + state.user : 'Guest';
    })
  }

}
