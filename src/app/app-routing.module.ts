import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';
import { PostComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SportsComponent } from './components/sports/sports.component';
import { SportsDetailsComponent } from './components/sports-details/sports-details.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { LoginComponent } from './components/login/login.component';
import { RegistereComponent } from './components/registere/registere.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent
  },
  {
    path: 'sports',
    component: SportsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sports/:id',
    component: SportsDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addsport',
    component: HeroFormComponent
  },
  {
    path: 'edit/:id',
    component: EditTeamsComponent,
    pathMatch: 'full'
  },
  {
    path: 'profileEdtior',
    component: ProfileEditorComponent
  },
  // authentication route
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistereComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
