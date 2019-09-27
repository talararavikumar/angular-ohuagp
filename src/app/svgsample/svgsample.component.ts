import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svgsample',
  templateUrl: './svgsample.component.html',
  styleUrls: ['./svgsample.component.scss']
})
export class SvgsampleComponent implements OnInit {

  public sIconId:string = "mdbgImage";
  constructor() { }
 
  ngOnInit() {
  }

}
