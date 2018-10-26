import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = 'https://todolistapi2.herokuapp.com/events';
  private _specialEventsUrl = 'https://todolistapi2.herokuapp.com/special';
  private _sportsEventsUrl = 'https://todolistapi2.herokuapp.com/sports'

  constructor(private http: HttpClient) { 

  }

  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }

  getSports() {
    return this.http.get<any>(this._sportsEventsUrl);
  }
}
