import { MyGaurd } from './services/myGaurd.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path : '', component : HomeComponent},
			{ path : 'about', component : AboutComponent, canActivate : [MyGaurd]}
		])
	],
	providers: [
		MyGaurd
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
