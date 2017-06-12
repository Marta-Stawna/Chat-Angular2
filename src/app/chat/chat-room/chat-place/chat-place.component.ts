import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from "../../chat.service";
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent implements OnInit{

messages=[];
date;
items: FirebaseListObservable<any>;
name: any;
msgVal: string = '';
ngOnInit(){
}

  constructor(private chatService: ChatService,public af: AngularFire) {
    this.date= new Date().toJSON().slice(11,19).replace(/-/g,'-');
    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 5
      }
    });
    af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });


    }

    chatSend(element) {
      let name =this.chatService.getNick();
      let message = element.editorElem.querySelector('p').innerHTML;
      this.items.push({ message: message, name: name});
      console.log(typeof message, this.items)
      this.msgVal = '';
  }

   fbGetData(){
    //  this.db.ref().on('values',(snapshot)=>
    //   console.log(snapshot.val()))
     }


// sendMessages(element){
//   console.log(element)
//
//       return this.messages.push(message.innerHTML);
//     }
}
