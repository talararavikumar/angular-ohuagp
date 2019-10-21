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
'./svgsample/svgsample.component'
import {ScSvgspriteComponent} from
'./sc-svgsprite/sc-svgsprite.component'
import {NewUserFormComponent} from
'./new-user-form/new-user-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DemoMaterialModule} from './materail-module'
import {LayoutComponent} from './layout/layout.component'
import {GridautoflowComponent} from './gridautoflow/gridautoflow.component'
import {MinmaxsampleComponent} from './minmaxsample/minmaxsample.component';
import { ScssSampleComponent } from './scss-sample/scss-sample.component';
import { CallapplybindComponent } from './callapplybind/callapplybind.component';
import { DisplayblocksampleComponent } from './displayblocksample/displayblocksample.component'
@NgModule({
  imports:
  [ BrowserModule, FormsModule,ReactiveFormsModule ,MatFormFieldModule,DemoMaterialModule],

  declarations: 
  [ AppComponent, HelloComponent, AngularSampleListComponent ,DynamicComponentComponent, Beforaftersample1Component,
  BorderBoxSampleComponent, CenterAlignFlexComponent,
  FlatarrowComponent, FlexautoflowComponent,
  SvgsampleComponent, ScSvgspriteComponent,
  NewUserFormComponent,LayoutComponent,
  GridautoflowComponent,MinmaxsampleComponent, ScssSampleComponent, CallapplybindComponent, DisplayblocksampleComponent],

  bootstrap: 
  [ AppComponent ],

  entryComponents:
  [Beforaftersample1Component, BorderBoxSampleComponent,
  CenterAlignFlexComponent, FlatarrowComponent,
  FlexautoflowComponent,
  SvgsampleComponent,ScSvgspriteComponent,
  NewUserFormComponent,LayoutComponent,
  GridautoflowComponent,MinmaxsampleComponent,ScssSampleComponent,CallapplybindComponent,DisplayblocksampleComponent]
})
export class AppModule { }
