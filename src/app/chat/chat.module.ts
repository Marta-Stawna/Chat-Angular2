import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyWordsListComponent } from './chat-room/key-words-list/key-words-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatPlaceComponent } from './chat-room/chat-place/chat-place.component';
import { ChatStartComponent } from './chat-start/chat-start.component';
import { ChatThemesComponent } from './chat-start/chat-themes/chat-themes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ChatStartComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeyWordsListComponent, ChatRoomComponent, ChatPlaceComponent, ChatThemesComponent, ChatStartComponent],
  exports:[ChatStartComponent]
})
export class ChatModule { }
