import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { DemoPipe } from './demo.pipe';
import { NgContentParentComponent } from './ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from './ng-content-child/ng-content-child.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    DemoPipe,
    NgContentParentComponent,
    NgContentChildComponent,
    CustomDirectiveDirective,
    ReactiveFormComponent,
    ProductListComponent,
    ReactiveFormsComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule ,TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
