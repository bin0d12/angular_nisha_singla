import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirNgForComponent } from './directive/dir-ng-for/dir-ng-for.component';
import { DirNgIfComponent } from './directive/dir-ng-if/dir-ng-if.component';
import { LifeCycleHookPraticeComponent } from './life-cycle-hook-pratice/life-cycle-hook-pratice.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EncapsualtionComponent } from './encapsualtion/encapsualtion.component';
import { EncapsualtionChildComponent } from './encapsualtion-child/encapsualtion-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirNgForComponent,
    DirNgIfComponent,
    LifeCycleHookPraticeComponent,
    ParentComponent,
    ChildComponent,
    EncapsualtionComponent,
    EncapsualtionChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
