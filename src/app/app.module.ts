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
import {FlatarrowComponent} from
'./flatarrow/flatarrow.component'
import {FlexautoflowComponent} from
'./flexautoflow/flexautoflow.component'
import {SvgsampleComponent} from 
'./svgsample/Svgsample.component'
import {ScSvgspriteComponent} from
'./sc-svgsprite/sc-svgsprite.component'
@NgModule({
  imports:
  [ BrowserModule, FormsModule ],

  declarations: 
  [ AppComponent, HelloComponent, AngularSampleListComponent ,DynamicComponentComponent, Beforaftersample1Component,
  BorderBoxSampleComponent, CenterAlignFlexComponent,
  FlatarrowComponent, FlexautoflowComponent,
  SvgsampleComponent, ScSvgspriteComponent],

  bootstrap: 
  [ AppComponent ],

  entryComponents:
  [Beforaftersample1Component, BorderBoxSampleComponent,
  CenterAlignFlexComponent, FlatarrowComponent,
  FlexautoflowComponent,
  SvgsampleComponent]
})
export class AppModule { }
