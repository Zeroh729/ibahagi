import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TweetClassifierComponent } from './tweetclass-app.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
  					TweetClassifierComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
