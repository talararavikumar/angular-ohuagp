import { Component, OnInit } from '@angular/core';
import { TempData } from 'src/app/LifeCycle/temp-data/temp-data.model';

@Component({
  selector: 'app-clariti-layout',
  templateUrl: './clariti-layout.component.html',
  styleUrls: ['./clariti-layout.component.css']
})
export class ClaritiLayoutComponent implements OnInit {

  numVal: number;
  strVal: string;
  temp: TempData;
  
  constructor() { 
    this.numVal = 1;
    this.strVal = 'test'
    this.temp = new TempData(10, 'sample data')
  }

  public efnTreeItemClick():void{
    // this.temp = new TempData(100, 'sample data');
    this.temp.id = 201;
    this.temp.content = "modified"
  }

  ngOnInit() {
  }

}
