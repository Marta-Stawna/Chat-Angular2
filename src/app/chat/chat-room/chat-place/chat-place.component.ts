import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent implements OnInit{

messages=[];
ngOnInit(): void {
}
constructor(){}
        //   drop(ev) {
        //      ev.dataTransfer.getData("text");
        // }
sendMessages(element){
      let message = element.querySelector('p');
      return this.messages.push(message.innerHTML);
    }
}
