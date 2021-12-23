import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { FeedComponent } from './pages/feed/feed.component';
import { NetworkComponent } from './pages/network/network.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'notices', component: NoticesComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FeedComponent,
    NetworkComponent,
    JobsComponent,
    ChatComponent,
    NoticesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
