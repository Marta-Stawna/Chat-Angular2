import { Component, OnInit } from '@angular/core';
import { ChatStartService } from '../chat-start.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-chat-themes',
  templateUrl: './chat-themes.component.html',
  styleUrls: ['./chat-themes.component.css'],
  providers: [ChatStartService]
})
export class ChatThemesComponent implements OnInit {

  public themes:Array<string> = [];


  constructor(private chatStartService: ChatStartService) { }

  ngOnInit() {
    this.chatStartService.getThemes().subscribe(
      data => this.themes = data
    );
  }



}
