import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { PostTeam } from '../interfaces/PostTeam';
import { TeamDetails } from '../interfaces/TeamDetails';
import { Store } from '@ngrx/store';

interface DeleteTeam {
  _id?: String
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  readonly ROOT_URL: string = "http://localhost:3000/api";
  readonly PLACEHOLDER_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient,
              private store: Store<any>) {
  }

  getSports = () => {
    return this.http.get<TeamDetails>(this.ROOT_URL + '/team', { 
      headers: this.HTTP_OPTIONS.headers });
  }

  createSportsPost = (jsonObject: Object) => {
    return this.http.post<PostTeam>(this.ROOT_URL + '/team', jsonObject);
  }

  updateSportsPost = (jsonObject: Object, playerId: string) => {
    return this.http.patch<PostTeam>(this.ROOT_URL + '/team/' + playerId, jsonObject);
  }

  deleteSport = (playerId: string) => {
    return this.http.delete<DeleteTeam>(this.ROOT_URL + '/team/' + playerId);
  }

  getSportsDetails = (sportsId) => {
    return this.http.get<TeamDetails>(this.ROOT_URL + '/team/' + sportsId);
  }

  getUsers = () => {
    return this.http.get(this.PLACEHOLDER_URL + '/users');
  }

  getUser = (userId) => {
    return this.http.get(this.PLACEHOLDER_URL + '/users/' + userId);
  }

  getPosts = () => {
    return this.http.get(this.PLACEHOLDER_URL + '/posts');
  }

  getPost = (postId) => {
    return this.http.get(this.PLACEHOLDER_URL + '/posts/' + postId);
  }

  getTeamState() {
    return this.store.select('teamReducer')
  }

  updateTeamState(reduxObj) {
    console.log(reduxObj);
    this.store.dispatch({
      type: reduxObj.action,
      payload: reduxObj.payload
    });
  }
}
