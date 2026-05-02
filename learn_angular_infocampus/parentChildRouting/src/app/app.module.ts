import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    ContactComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    RouterModule.forRoot([
      { path: '', component:HomeComponent},
      { path: 'contact', component:ContactComponent},
      { 
        path: 'users', 
		component:UsersComponent,
		children: [
			{path:'info/:id', component:InfoComponent}
		]
      },
    ])
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
