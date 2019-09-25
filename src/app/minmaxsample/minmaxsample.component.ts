import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minmaxsample',
  templateUrl: './minmaxsample.component.html',
  styleUrls: ['./minmaxsample.component.scss']
})
export class MinmaxsampleComponent implements OnInit {

  public nNumberCnt: number = 1000;
  public arrObjects: Array<any> = new Array();
  constructor() { }

  ngOnInit() {
    for (let i: number = 0; i < this.nNumberCnt; i++) {
      this.arrObjects.push({"Title":"Child" + i.toString()})
    }
  }

}
