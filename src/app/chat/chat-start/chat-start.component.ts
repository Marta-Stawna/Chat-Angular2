import { Component, OnInit } from '@angular/core';
import { ChatService } from './../chat.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-start',
  templateUrl: './chat-start.component.html',
  styleUrls: ['./chat-start.component.css']
})
export class ChatStartComponent implements OnInit {

  constructor(private chatService: ChatService, private router: Router) {
  }

  ngOnInit() {
  }
  submitQuestion(value: string) {
    this.chatService.setNick(value);
    console.log(value);
    console.log(this.chatService.getNick());
    this.router.navigate(['/chat-room']);

  }

}
