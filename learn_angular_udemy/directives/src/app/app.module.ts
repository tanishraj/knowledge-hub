import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfOtherComponent } from './ng-if-other/ng-if-other.component';
import { NgIfAnotherComponent } from './ng-if-another/ng-if-another.component';
import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { LikeComponent } from './like/like.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { InputFormatDirectiveDirective } from './input-format-directive.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgIfOtherComponent,
    NgIfAnotherComponent,
    HiddenPropertyComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    LikeComponent,
    NgStyleComponent,
    SafeTraversalComponent,
    CustomDirectivesComponent,
    InputFormatDirectiveDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
