import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbaComponent } from './nba/nba.component';
import { NbasingleComponent } from './nbasingle/nbasingle.component';


@NgModule({
  declarations: [
    AppComponent,
    NbaComponent,
    NbasingleComponent
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
