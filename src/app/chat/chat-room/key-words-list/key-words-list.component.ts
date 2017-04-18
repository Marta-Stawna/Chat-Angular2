import { Component, OnInit, HostListener, OnDestroy, HostBinding, Input } from '@angular/core';
import { ChatRoomService } from '../chat-room.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-key-words-list',
  templateUrl: './key-words-list.component.html',
  styleUrls: ['./key-words-list.component.css'],
  providers:[ChatRoomService]
})
export class KeyWordsListComponent implements OnInit {

  public keyWords;
  private subscribtion:Subscription;
   @Input() dragWord;

  constructor(private serviceChatRoom:ChatRoomService ) { }

  ngOnInit() {
    this.subscribtion=this.serviceChatRoom.getKeyWords().subscribe(data=>this.keyWords=data);//obsługa błedu- messegeBox- serwis
    
  }
  // @HostListener('dragEnd')//nazwa event HTML
  //  test(e){
  // }
   ngOnDestroy(){
      this.subscribtion.unsubscribe();
   }

   drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerHTML);
    console.log(ev.target.innerHTML)
}
}
