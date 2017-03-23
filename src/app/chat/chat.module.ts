import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyWordsListComponent } from './chat-room/key-words-list/key-words-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatPlaceComponent } from './chat-room/chat-place/chat-place.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeyWordsListComponent,ChatRoomComponent, ChatPlaceComponent],
  exports:[ChatRoomComponent]
})
export class ChatModule { }
