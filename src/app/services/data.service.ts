import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { PostTeam } from '../interfaces/PostTeam';
import { TeamDetails } from '../interfaces/TeamDetails';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application-json'
    })
  }

  readonly ROOT_URL = 'http://todolistapi2.herokuapp.com';
  readonly PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient,
              private store: Store<any>) {
  }

  getSports = () => {
    return this.http.get<TeamDetails>(this.ROOT_URL + '/sports');
  }

  createSportsPost = (jsonObject: Object) => {
    return this.http.post<PostTeam>(this.ROOT_URL + '/sports', jsonObject);
  }

  updateSportsPost = (jsonObject: Object, playerId) => {
    return this.http.put(this.ROOT_URL + '/sports/' + playerId, jsonObject);
  }

  deleteSport = (playerId) => {
    return this.http.delete(this.ROOT_URL + '/sports/' + playerId);
  }

  getSportsDetails = (sportsId) => {
    return this.http.get<TeamDetails>(this.ROOT_URL + '/sports/' + sportsId);
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
