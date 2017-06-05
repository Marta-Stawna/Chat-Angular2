import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class ChatRoomService {

  constructor(private http: Http) {
}

  getKeyWords() :Observable<Object>{
    return this.http.get('https://chat-angular2-5c466.firebaseio.com/.json').map((res:Response)=> res.json().data);
  }

}
