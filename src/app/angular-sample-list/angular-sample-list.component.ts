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
    this.oSamplesMap.set("min-content","app-min-content-sample");
    this.oSamplesMap.set("Center Align Flex","app-center-align-flex");
    this.oSamplesMap.set("LayOut","layout");
    this.oSamplesMap.set("sample arrow","app-flatarrow");
    this.oSamplesMap.set("before after","app-beforaftersample1");
    this.oSamplesMap.set("svgsample", "app-svgsample");
    this.oSamplesMap.set("materror", "app-mat-error");
    this.oSamplesMap.set("form", "app-new-user-form");
    this.oSamplesMap.set("view child", "app-view-child-base");
    this.oSamplesMap.set("boredr box", "app-border-box-sample");
    this.oSamplesMap.set("grid autoflow", "app-gridautoflow");
    this.oSamplesMap.set("flex autoflow", "app-flexautoflow");
    this.oSamplesMap.set("flex minmax", "app-minmaxsample");
    this.oSamplesMap.set("grid minmax","app-grid-min-max-sample");
    this.oSamplesMap.set("scss sample","app-scss-sample");
  }

  public onSamlpeClick(selectedComponent:string):void {
    this.selector = selectedComponent;
  }

}
