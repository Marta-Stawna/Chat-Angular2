import { Component, OnInit } from '@angular/core';
import { ChatStartService } from '../chat-start.service';
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';
import { ChatService } from './../../chat.service';

@Component({
  selector: 'app-chat-themes',
  templateUrl: './chat-themes.component.html',
  styleUrls: ['./chat-themes.component.css'],
  providers: [ChatStartService]
})
export class ChatThemesComponent implements OnInit {

  public themes:Array<string> = [];


  constructor(private chatStartService: ChatStartService, private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.chatStartService.getThemes().subscribe(
      data =>this.themes = data)
  }
  goToChat(theme){
    this.chatService.setCurrentTheme(theme);
    this.router.navigate(['/chat-room']);
  }

}
