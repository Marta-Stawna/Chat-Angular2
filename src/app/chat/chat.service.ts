import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  public nick: string = '';
  getNick() {
    return this.nick;
  }
  setNick(value: string){
    this.nick=value;
  }
}
