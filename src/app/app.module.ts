import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { KeyWordsListComponent } from './chat/chat-room/key-words-list/key-words-list.component';
import { ChatPlaceComponent } from './chat/chat-room/chat-place/chat-place.component';
import { ChatRoomListComponent } from './welcome/chat-room-list/chat-room-list.component';
import { PageNotFoundComponent } from './not-found.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'chat', loadChildren: 'app/chat/chat.module#ChatModule' },
    { path: 'welcome', loadChildren: 'app/welcome/welcome.module#WelcomeModule' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
