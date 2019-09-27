import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularSampleListComponent } from './angular-sample-list/angular-sample-list.component'
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component'
import {Beforaftersample1Component} from './beforaftersample1/beforaftersample1.component'
import {BorderBoxSampleComponent} from 
'./border-box-sample/border-box-sample.component'
import {CenterAlignFlexComponent} from
'./center-align-flex/center-align-flex.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AngularSampleListComponent ,DynamicComponentComponent,
  Beforaftersample1Component,
  BorderBoxSampleComponent,
  CenterAlignFlexComponent],
  bootstrap:    [ AppComponent ],
  entryComponents:[Beforaftersample1Component,BorderBoxSampleComponent,
  CenterAlignFlexComponent]
})
export class AppModule { }
