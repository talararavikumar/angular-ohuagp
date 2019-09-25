import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularSampleListComponent } from './angular-sample-list/angular-sample-list.component'
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component'
import {Beforaftersample1Component} from './beforaftersample1/beforaftersample1.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AngularSampleListComponent ,DynamicComponentComponent,
  Beforaftersample1Component],
  bootstrap:    [ AppComponent ],
  entryComponents:[]
})
export class AppModule { }
