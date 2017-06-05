import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { KeyWordsListComponent } from './chat/chat-room/key-words-list/key-words-list.component';
import { ChatPlaceComponent } from './chat/chat-room/chat-place/chat-place.component';
import { ChatThemesComponent } from './chat/chat-start/chat-themes/chat-themes.component';
import { ChatStartComponent } from './chat/chat-start/chat-start.component';
import { PageNotFoundComponent } from './not-found.component';
import { routes } from './app-routing.module';
import { ChatModule } from './chat/chat.module';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {config} from '../environments/firebase.config';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatThemesComponent,
    ChatStartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ChatModule,
    AngularFireModule.initializeApp(config.firebase),
],
  bootstrap: [AppComponent]
})
export class AppModule { }
