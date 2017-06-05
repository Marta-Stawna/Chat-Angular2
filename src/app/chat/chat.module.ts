import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyWordsListComponent } from './chat-room/key-words-list/key-words-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatPlaceComponent } from './chat-room/chat-place/chat-place.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'chat-room', component:  ChatRoomComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillEditorModule,
    FormsModule
  ],
  declarations: [KeyWordsListComponent, ChatRoomComponent, ChatPlaceComponent],
})
export class ChatModule { }
