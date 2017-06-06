import { Component, OnInit, HostListener, OnDestroy, HostBinding, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ChatService } from "../../chat.service";
//import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-key-words-list',
  templateUrl: './key-words-list.component.html',
  styleUrls: ['./key-words-list.component.css']
})
export class KeyWordsListComponent implements OnInit {

  @Input() dragWord;
  public keyWords;
 // items: FirebaseListObservable<any[]>;
  constructor( private chatService:ChatService){
    console.log(this.chatService.getCurrentTheme())
    this.keyWords=this.chatService.getCurrentTheme().data;
    
    //this.items = db.list('/items');
  }

  ngOnInit() {
    //this.fbGetData();
     console.log("aaaaaaaaaaa",this.keyWords)
  }
  // @HostListener('dragEnd')//nazwa event HTML
  //  test(e){
  // }


  //  fbGetData(){
  //    firebase.database().ref('/').on('child_addes',(snapshot)=>
  //    this.keyWords=snapshot.value)
  //  }

   drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerHTML);
  }
}
