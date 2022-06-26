import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edureka-header',
  // templateUrl: './header.component.html',
  template : `<h1>{{applicationName}}</h1>
    Multiline Example
  `,
  styleUrls: ["../../text.css", './header.component.css']
})
export class HeaderComponent implements OnInit {

  public applicationName = "Edureka News"

  constructor() { }

  ngOnInit(): void {
  }

}
