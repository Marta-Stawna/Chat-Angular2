import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from "../../chat.service";

@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent implements OnInit{

messages=[];
date;
ngOnInit(): void {
}
constructor(private serviceChat : ChatService){
    this.date= new Date().toJSON().slice(11,19).replace(/-/g,'-');
}
        //   drop(ev) {
        //      ev.dataTransfer.getData("text");
        // }
sendMessages(element){
      let message = element.querySelector('p');
      return this.messages.push(message.innerHTML);
    }
}
