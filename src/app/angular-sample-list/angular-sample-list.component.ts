import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-sample-list',
  templateUrl: './angular-sample-list.component.html',
  styleUrls: ['./angular-sample-list.component.scss']
})
export class AngularSampleListComponent implements OnInit {

  public oSamplesMap: Map<string, string> = new Map<string, string>();
  public selector:string = "";

  constructor() { }
  

  ngOnInit() {
    this.oSamplesMap.set("min-content sample","app-min-content-sample");
    this.oSamplesMap.set("Center Align Flex Component","app-center-align-flex");
    this.oSamplesMap.set("LayOut","layout");
    this.oSamplesMap.set("sample arrow","app-flatarrow");
    this.oSamplesMap.set("absolute sample","app-absolutesample");
    this.oSamplesMap.set("before after sample","app-beforaftersample1");
    this.oSamplesMap.set("widthmarginsample","app-widthmarginsample");
    this.oSamplesMap.set("svgsample",
     "app-svgsample");
    this.oSamplesMap.set("materror", "app-mat-error");
    this.oSamplesMap.set("form sample", "app-new-user-form");
    this.oSamplesMap.set("view child exapmle", "app-view-child-base");
    this.oSamplesMap.set("boredr box sample", "app-border-box-sample");
    this.oSamplesMap.set("grid autoflow sample", "app-gridautoflow");
    this.oSamplesMap.set("flex autoflow sample", "app-flexautoflow");
    this.oSamplesMap.set("flex minmax sample", "app-minmaxsample");
    this.oSamplesMap.set("grid minmax sample","app-grid-min-max-sample");
  }

  public onSamlpeClick(selectedComponent:string):void {
    this.selector = selectedComponent;
  }

}
