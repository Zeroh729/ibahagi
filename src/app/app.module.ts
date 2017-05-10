import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TweetClassifierComponent } from './tweetclass-app.component';
import { AppComponent }  from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports:      [ 
	  				BrowserModule,
					AgmCoreModule.forRoot({
					    apiKey: 'AIzaSyCE7GpZyxZlTZYmLCv0hlj78nL6hE56dpY'
					}) 
				],
  declarations: [ 
	  				AppComponent,
	  				TweetClassifierComponent
  				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
