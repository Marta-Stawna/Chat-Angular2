import { Injectable } from '@angular/core';

@Injectable()
export class ChatRoomService {

  constructor() { }
  public key_words_data=[
    "Juventus Turyn",
    "SS Lazio Rzym",
    "Liga włoska",
    "Gonzalo Higuain",
    "Mario Mandzukić"
  ]

  getKeyWords(){
    return this.key_words_data;
  }

}
