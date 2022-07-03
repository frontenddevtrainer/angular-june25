import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'edureka-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() message !: string;
  @Output() userclicked : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log("init", "LifecycleDemoComponent")
  }

  ngOnDestroy(): void {
    console.log("destroy", "LifecycleDemoComponent")
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  clicked(){
      this.userclicked.emit(new Date().toISOString())
  }

}
