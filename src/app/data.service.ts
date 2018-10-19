import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { PostTeam } from './PostTeam';
import { TeamDetails } from './TeamDetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application-json'
    })
  }

  readonly ROOT_URL = 'https://todolistapi2.herokuapp.com';
  readonly PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getSports = () => {
    return this.http.get<TeamDetails>(this.ROOT_URL + '/sports');
  }

  createSportsPost = (jsonObject: Object) => {
    return this.http.post<PostTeam>(this.ROOT_URL + '/sports', jsonObject);
  }

  updateSportsPost = (jsonObject: Object, playerId) => {
    return this.http.put(this.ROOT_URL + '/sports' + playerId, jsonObject);
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
}
