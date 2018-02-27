import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ɵROUTER_PROVIDERS } from '@angular/router';
import { ChatBoxComponent} from './chatbox/chatbox';
import {HomeComponent} from './home/home';
import {HttpTestService} from './home.service';
import {HttpModule} from '@angular/http';


const appRoutes: Routes = [
  {path: 'chatbox', component: ChatBoxComponent },
  { path: 'home', component:  HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
