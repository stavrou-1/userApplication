import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { MessagesComponent } from './messages/messages.component';
import { EditTeamsComponent } from './edit-teams/edit-teams.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostComponent,
    UsersComponent,
    DetailsComponent,
    PostDetailsComponent,
    SportsComponent,
    SportsDetailsComponent,
    HeroFormComponent,
    MessagesComponent,
    EditTeamsComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
