import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-min-max-sample',
  templateUrl: './grid-min-max-sample.component.html',
  styleUrls: ['./grid-min-max-sample.component.scss']
})
export class GridMinMaxSampleComponent implements OnInit {

  public nNumberCnt: number = 99;
  public arrObjects: Array<any> = new Array();
  constructor() { }

  ngOnInit() {
    for (let i: number = 0; i < this.nNumberCnt; i++) {
      this.arrObjects.push({"Title":"Child" + i.toString()})
    }
  }

}
