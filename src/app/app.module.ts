import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SportsComponent } from './components/sports/sports.component';
import { SportsDetailsComponent } from './components/sports-details/sports-details.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalServiceService } from './services/modal-service.service';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { RegistereComponent } from './components/registere/registere.component';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ShadowDirective } from './directives/shadow.directive';
import { SelectedColorDirective } from './directives/selected-color.directive';
import { ExponentialPipe } from './pipes/exponential.pipe';
// import { bypassSanitizationTrustStyle } from '@angular/core/src/sanitization/bypass';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';


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
    StoreModule.forRoot(reducers, {}),
    HttpClientModule,
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
