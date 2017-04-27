import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-place',
  templateUrl: './chat-place.component.html',
  styleUrls: ['./chat-place.component.css']
})
export class ChatPlaceComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit() {
  }

drop(ev) {
  ev.dataTransfer.getData("text")
}}
