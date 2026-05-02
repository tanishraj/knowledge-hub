import { ArrayLimit } from './pipe/arrayLimit.pipe';
import { PePipe } from './pipe/pe.pipe';
import { DoublePipe } from './pipe/double.pipe';
import { searchService } from './services/search.service';
import { ObservableService } from './services/observable.service';
import { triangleService } from './services/triangle.service';
import { calculatorService } from './services/calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { AverageMarksComponent } from './average-marks/average-marks.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CircleComponent } from './circle/circle.component';
import { MycalculatorComponent } from './mycalculator/mycalculator.component';
import { TriangleComponent } from './triangle/triangle.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CitiesComponent } from './cities/cities.component';
import { CourseComponent } from './course/course.component';
import { PromiseService } from './services/promise.service';
import { PromisesComponent } from './promises/promises.component';
import { HttpModule } from '@angular/http';
import { ObservablesComponent } from './observables/observables.component';
import { ItuneComponent } from './itune/itune.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoutingComponent } from './routing/routing.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CompanyDynamicFormComponent } from './company-dynamic-form/company-dynamic-form.component';
import { PePipesComponent } from './pe-pipes/pe-pipes.component';
import { ArrayPipeComponent } from './array-pipe/array-pipe.component';
import { ObservablePostsComponent } from './observable-posts/observable-posts.component';

@NgModule({
	declarations: [
		AppComponent,
		AdditionComponent,
		AverageMarksComponent,
		CircleComponent,
		MycalculatorComponent,
		TriangleComponent,
		DoctorComponent,
		CitiesComponent,
		CourseComponent,
		PromisesComponent,
		ObservablesComponent,
		ItuneComponent,
		TemplateDrivenFormComponent,
		ReactiveFormsComponent,
		DynamicFormComponent,
		PipesComponent,
		DoublePipe,
		HomeComponent,
		AboutComponent,
		ContactComponent,
		RoutingComponent,
		LoginComponent,
		WelcomeComponent,
		CompanyDynamicFormComponent,
		PePipesComponent,
		PePipe,
		ArrayPipeComponent,
		ArrayLimit,
		ObservablePostsComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		RouterModule.forRoot([
			{path: '', component: HomeComponent},
			{path: 'About', component: AboutComponent},
			{path: 'Contact', component: ContactComponent},
			{path: 'Login/:val', component: LoginComponent},
			{path: 'Welcome', component: WelcomeComponent},
		])
	],
	providers: [
		calculatorService,
		triangleService,
		PromiseService,
		ObservableService,
		searchService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
