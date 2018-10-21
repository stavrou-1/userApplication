import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = 'http://localhost:4040/events';
  private _specialEventsUrl = 'http://localhost:4040/special';

  constructor(private http: HttpClient) { 

  }

  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}
