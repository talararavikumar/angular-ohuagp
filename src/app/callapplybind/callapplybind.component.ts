import { Component, OnInit } from '@angular/core';

class A{
  classname:string = "class A"
  fnClassA(arg){
    console.log(arg);
    console.log(this.classname);
  }
}

class B{
  classname:string ="class B"
}

class C{
  classname:string ="class C"
}


@Component({
  selector: 'app-callapplybind',
  templateUrl: './callapplybind.component.html',
  styleUrls: ['./callapplybind.component.css']
})
export class CallapplybindComponent implements OnInit {

  callback:string = "someting"

  constructor() { }

  ngOnInit() {
  }

  fnExperiment1(arg1,){
    console.log(arg1);
     console.log((this as any).classname);
  }

  fnExperiment2(arg1,arg2){
    console.log(arg1,arg2);
     console.log((this as any).classname);
  }

  fnExperiment3(arg1,arg2, arg3){
    console.log(arg1,arg2,arg3);
     console.log((this as any).classname);
  }

  test(){
    let objectA = new A();
    let objectB = new B();
    let objectC = new C();
    // console.log("clicked");
    this.fnExperiment1.call(objectA, "test1");   
    this.fnExperiment2.apply(objectB, ["test1", "test2"]);
    const newMethod =  this.fnExperiment3.bind(objectC, "test1", "test2","test3");  
    newMethod()
    // objectA.fnClassA.call(objectB, "test2");
  }



}