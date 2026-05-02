import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { SearchService } from './services/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		ChartsModule
	],
	providers: [
		SearchService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
