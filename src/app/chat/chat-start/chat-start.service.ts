import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatStartService {

  constructor(private http: Http) { }

  getThemes() : Observable<string[]>{
    return this.http.get('https://chat-angular2-5c466.firebaseio.com/.json')
      .map((res)=>res.json().data.data);
  }

}
