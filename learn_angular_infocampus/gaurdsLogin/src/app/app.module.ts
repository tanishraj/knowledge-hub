import { FormsModule } from '@angular/forms';
import { MyGaurd } from './services/myGaurd.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
			{ path: '', component : HomeComponent},
			{ path: 'login', component : LoginComponent},
			{ path: 'welcome', component : WelcomeComponent, canActivate:[MyGaurd]}
		])
	],
	providers: [
		MyGaurd
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
