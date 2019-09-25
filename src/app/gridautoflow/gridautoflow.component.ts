import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridautoflow',
  templateUrl: './gridautoflow.component.html',
  styleUrls: ['./gridautoflow.component.css']
})
export class GridautoflowComponent implements OnInit {

  public nNumberCnt: number = 99;
  public arrObjects: Array<any> = new Array();
  constructor() { }

  ngOnInit() {
    for (let i: number = 0; i < this.nNumberCnt; i++) {
      this.arrObjects.push({"Title":"Child" + i.toString()})
    }
  }

}
