import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'edureka-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("init", "LifecycleDemoComponent")
  }

  ngOnDestroy(): void {
    console.log("destroy", "LifecycleDemoComponent")
  }

}
