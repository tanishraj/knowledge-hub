import { GithubProfileComponent } from './github-profile/github-profile.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { PostsService } from './services/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'posts', component:PostsComponent},
      {path:'github-profiles', component:GithubProfileComponent}
    ])
  ],
  providers: [
    PostsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
