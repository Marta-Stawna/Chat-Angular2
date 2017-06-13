import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import { ChatService } from "../../chat.service";
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent implements OnInit{

items: FirebaseListObservable<any>;
name: any;
msgVal: string = '';

  ngOnInit(){
  }

  constructor(private chatService: ChatService,public af: AngularFire) {
    let id;
    setTimeout(()=>{
      id =chatService.getId();
      return id
    } ,100)
    setTimeout(()=>
    this.database(id),1000);
  }

  async getId(){
    let id = await this.chatService.getId();
    return id
  }

   database(id) {
    this.items = this.af.database.list('/messages'+id, {
     query: {
       limitToLast: 5
     }
   });
   this.af.auth.subscribe(auth => {
     if(auth) {
       this.name = auth;
     }
   });

  }
    chatSend(element) {
      let date= new Date().toLocaleTimeString();
      let name =this.chatService.getNick();
      let message = element.editorElem.children[0].innerHTML;
      this.items.push({ message: message, name: name, date :date});
      this.msgVal = '';
  }

}
