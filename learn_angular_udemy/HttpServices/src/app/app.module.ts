import { CrudService } from './services/crud.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { GettingDataComponent } from './getting-data/getting-data.component';
import { CreatingDataComponent } from './creating-data/creating-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { SeperationOfConcernComponent } from './seperation-of-concern/seperation-of-concern.component';
import { PostService } from './services/post.service';
import { UnexpectedErrorComponent } from './unexpected-error/unexpected-error.component';
import { ErrorHandlingUsingAppSpecificErrorComponent } from './error-handling-using-app-specific-error/error-handling-using-app-specific-error.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingDataComponent,
    CreatingDataComponent,
    UpdateDataComponent,
    DeleteDataComponent,
    NgOnInitComponent,
    SeperationOfConcernComponent,
    UnexpectedErrorComponent,
    ErrorHandlingUsingAppSpecificErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    PostService,
    CrudService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
