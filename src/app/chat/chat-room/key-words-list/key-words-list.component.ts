import { Component, OnInit, HostListener, OnDestroy, HostBinding, Input } from '@angular/core';
import { ChatRoomService } from '../chat-room.service';
import { Subscription } from "rxjs/Subscription";
//import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-key-words-list',
  templateUrl: './key-words-list.component.html',
  styleUrls: ['./key-words-list.component.css'],
  providers:[ChatRoomService]
})
export class KeyWordsListComponent implements OnInit {

  @Input() dragWord;
  public keyWords;
  private subscribtion:Subscription;
 // items: FirebaseListObservable<any[]>;
  constructor(  private serviceChatRoom:ChatRoomService){
    //this.items = db.list('/items');
  }

  ngOnInit() {
    this.subscribtion=this.serviceChatRoom.getKeyWords().subscribe(data=>this.keyWords=data);//obsługa błedu- messegeBox- serwis
    //this.fbGetData();
  }
  // @HostListener('dragEnd')//nazwa event HTML
  //  test(e){
  // }

   ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }

  //  fbGetData(){
  //    firebase.database().ref('/').on('child_addes',(snapshot)=>
  //    this.keyWords=snapshot.value)
  //  }

   drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerHTML);
  }
}
