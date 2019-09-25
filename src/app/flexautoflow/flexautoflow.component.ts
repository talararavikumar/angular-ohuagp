import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexautoflow',
  templateUrl: './flexautoflow.component.html',
  styleUrls: ['./flexautoflow.component.css']
})
export class FlexautoflowComponent implements OnInit {

  public nNumberCnt: number = 99;
  public arrObjects: Array<any> = new Array();
  constructor() { }
  ngOnInit() {
    for (let i: number = 0; i < this.nNumberCnt; i++) {
      this.arrObjects.push({"Title":"Child" + i.toString()})
    }
  }

}
