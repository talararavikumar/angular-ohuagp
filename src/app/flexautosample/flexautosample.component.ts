import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexautosample',
  templateUrl: './flexautosample.component.html',
  styleUrls: ['./flexautosample.component.scss']
})
export class FlexautosampleComponent implements OnInit {


  listItems = []
  constructor() { }

  ngOnInit() {
    for(let i = 0 ; i<50;i++){
      this.listItems.push("Item "+i.toString())
    }
  }

}