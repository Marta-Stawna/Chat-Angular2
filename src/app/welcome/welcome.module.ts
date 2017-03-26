import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomListComponent } from './chat-room-list/chat-room-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ChatRoomListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatRoomListComponent],
  exports:[ChatRoomListComponent]
})
export class WelcomeModule { }
