import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SachinComponent } from './sachin/sachin.component';
import { DravidComponent } from './dravid/dravid.component';
import { AzaharuddinComponent } from './azaharuddin/azaharuddin.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SachinComponent,
    DravidComponent,
    AzaharuddinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:SachinComponent},
      {path:'Dravid', component:DravidComponent},
      {path:'Azaharuddin', component:AzaharuddinComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
