
import { ChatStartComponent } from './chat/chat-start/chat-start.component';
import { PageNotFoundComponent } from './not-found.component';

import { ChatModule } from './chat/chat.module';

import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' },
    { path: 'chat', component: ChatStartComponent },
    { path: '**', component: PageNotFoundComponent }
];