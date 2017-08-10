import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmiP58D29XLi4YTNQtp6Eo8Xb8CR_Ty_A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
