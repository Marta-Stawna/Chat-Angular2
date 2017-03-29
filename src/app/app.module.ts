import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { KeyWordsListComponent } from './chat/chat-room/key-words-list/key-words-list.component';
import { ChatPlaceComponent } from './chat/chat-room/chat-place/chat-place.component';
import { ChatThemesComponent } from './chat/chat-themes/chat-themes.component';
import { PageNotFoundComponent } from './not-found.component';

import { ChatModule } from './chat/chat.module';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' },
    { path: 'chat', component: ChatThemesComponent },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatThemesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
