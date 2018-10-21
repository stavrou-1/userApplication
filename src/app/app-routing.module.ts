import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { EditTeamsComponent } from './edit-teams/edit-teams.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegistereComponent } from './registere/registere.component';
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
    component: SportsComponent
  },
  {
    path: 'sports/:id',
    component: SportsDetailsComponent
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
  // authentication routes
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
