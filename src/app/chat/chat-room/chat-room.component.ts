import { Component, OnInit, Inject} from '@angular/core';
import { ChatService } from './../chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private chatService: ChatService) {
    }

  ngOnInit() {
  }

}
