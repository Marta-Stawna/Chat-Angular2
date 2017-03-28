import { Component, OnInit } from '@angular/core';
import {ChatRoomService} from '../chat-room.service';

@Component({
  selector: 'app-key-words-list',
  templateUrl: './key-words-list.component.html',
  styleUrls: ['./key-words-list.component.css'],
  providers:[ChatRoomService]
})
export class KeyWordsListComponent implements OnInit {

  public key_words;

  constructor(private serviceChatRoom:ChatRoomService ) { }

  ngOnInit() {
    this.key_words=this.serviceChatRoom.getKeyWords();
    console.log(this.key_words);
  }

}
