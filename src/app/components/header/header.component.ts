import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edureka-header',
  // templateUrl: './header.component.html',
  template : "<h1>{{applicationName}}</h1>",
  styleUrls: ["../../text.css", './header.component.css']
})
export class HeaderComponent implements OnInit {

  public applicationName = "Edureka News"

  constructor() { }

  ngOnInit(): void {
  }

}
