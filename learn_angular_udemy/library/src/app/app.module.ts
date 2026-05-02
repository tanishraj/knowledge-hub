import { SummaryPipe } from './brief.pipe';
import { BooksService } from './books.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { VisitorsService } from './visitors.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    VisitorsComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BooksService,
    VisitorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
