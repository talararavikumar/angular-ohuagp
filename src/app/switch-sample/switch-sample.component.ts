import { Component, OnInit } from '@angular/core';

enum ImItemType {
    COMMITEM = 0,
    THREAD = 1,
    TREE = 2,
    SUBTHREAD = 3,
    FILE = 4,
    TODO = 5,
    BOOKMARK = 6
}

@Component({
  selector: 'app-switch-sample',
  templateUrl: './switch-sample.component.html',
  styleUrls: ['./switch-sample.component.css']
})
export class SwitchSampleComponent implements OnInit {

  /**
   *
   *
   * @type {*}
   * @memberof ImTdTodocontextComponent
   */
  public readonly  ImItemTypeEnum: any = ImItemType;

  /**
   *
   *
   * @type {ImItemType}
   * @memberof ImTdTodocontextComponent
   */
  public eImItemType:ImItemType = ImItemType.COMMITEM;
  
  constructor() { }

  ngOnInit() {

  }

}