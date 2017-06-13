import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  public nick: string = '';
  public currentTheme;
  private id;
  getNick() {
    return this.nick;
  }
  setNick(value: string){
    this.nick=value;
  }
  getCurrentTheme() {
    return this.currentTheme;
  }
  setCurrentTheme(value){
    this.currentTheme=value;
  }
  setId(id){
    this.id = id;
  }
  getId(){
    return  this.id;
  }

}
