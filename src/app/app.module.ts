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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { MessagesComponent } from './messages/messages.component';
import { ModalServiceService } from './modal-service.service';
import { EditTeamsComponent } from './edit-teams/edit-teams.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { RegistereComponent } from './registere/registere.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ShadowDirective } from './shadow.directive';
import { SelectedColorDirective } from './selected-color.directive';
import { ExponentialPipe } from './exponential.pipe';

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
    ProfileEditorComponent,
    RegistereComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ShadowDirective,
    SelectedColorDirective,
    ExponentialPipe
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
  providers: [
    ModalServiceService,
    AuthService,
    AuthGuard,
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
