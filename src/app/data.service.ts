import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    const e: string = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(e);
  }

  getUser(userId) {
    const f: string = 'https://jsonplaceholder.typicode.com/users/' + userId;
    return this.http.get(f);
  }

  getPosts() {
    const a: string = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(a);
  }

  getPost(postId) {
    const p: string = 'https://jsonplaceholder.typicode.com/posts/' + postId;
    return this.http.get(p);
  }
}
