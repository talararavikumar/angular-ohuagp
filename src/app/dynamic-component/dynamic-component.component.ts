import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit, OnChanges, AfterViewInit{

  @Input() public selector:string;

  @ViewChild('DynamicComp', {static:false,read:ViewContainerRef}) DynamicCompRef:ViewContainerRef;

  private oComponentRef: ComponentRef<any>;

  constructor(private oComponentFactoryResolver:ComponentFactoryResolver){
  }

  public ngAfterViewInit():void{
    this.createDynamicComponent();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes.selector.firstChange === false)
    {
      this.DynamicCompRef.clear();
      this.createDynamicComponent();
    }
  }

  public createDynamicComponent(){

     //Get all entry components factories data
     const oModuleFactories: Array<any> = Array.from( this.oComponentFactoryResolver["_factories"] );
     //Get the type of the component from its selector
     const anyFactoryType: any = oModuleFactories.find((oFactoryAt: any) => {
         if(oFactoryAt[1].selector === this.selector) {
             return oFactoryAt;
         }});

     // If the component is not specified in the entrycomponents list of @NgModule of AppModule
     // we will return from this here.
     if (undefined === anyFactoryType) {
         return null;
     }

    const factory = this.oComponentFactoryResolver.resolveComponentFactory(anyFactoryType[0]);
    this.oComponentRef = this.DynamicCompRef.createComponent(factory);
    this.oComponentRef.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
  }

}
