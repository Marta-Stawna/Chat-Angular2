import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyWordsListComponent } from './chat-room/key-words-list/key-words-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatPlaceComponent } from './chat-room/chat-place/chat-place.component';
import { ChatThemesComponent } from './chat-room/chat-themes/chat-themes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ChatThemesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeyWordsListComponent, ChatRoomComponent, ChatPlaceComponent, ChatThemesComponent],
  exports:[ChatThemesComponent]
})
export class ChatModule { }
