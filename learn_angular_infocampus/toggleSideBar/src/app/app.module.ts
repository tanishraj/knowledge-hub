import { MySuperService } from './services/mySuperService.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MySuperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
