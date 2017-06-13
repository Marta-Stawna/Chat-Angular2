import { Component, OnInit, HostListener, OnDestroy, HostBinding, Input , Inject} from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ChatService } from "../../chat.service";

@Component({
  selector: 'app-key-words-list',
  templateUrl: './key-words-list.component.html',
  styleUrls: ['./key-words-list.component.css']
})
export class KeyWordsListComponent implements OnInit {

  @Input() dragWord;
  public keyWords;
  private id;


  constructor( private chatService:ChatService){
    this.keyWords=this.chatService.getCurrentTheme().data;
    this.id=this.chatService.getCurrentTheme().id;
    this.chatService.setId(this.id);
  }

  ngOnInit() {

  }
   drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerHTML);
  }
}
