import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from "../../../interfaces/article"

import { trigger, state, style, transition, animate } from "@angular/animations"

@Component({
  selector: 'edureka-article-callout',
  templateUrl: './article-callout.component.html',
  styleUrls: ['./article-callout.component.css'],
  animations : [
    trigger("load", [
       state("notloaded", style({ opacity : 0 })),
       state("loaded", style({ opacity : 1, })),
       transition(":enter", animate("1s")),
       transition(":leave", animate("1s")),
      //  transition("loaded => notloaded", animate("500ms")),
    ])
  ]
})
export class ArticleCalloutComponent implements OnInit {

  @HostBinding("@load") get animationState() : string {
      return "loaded"
  }

  public email : string | number | null = null

  // Also create public property as article.
  @Input() article !: Article


  constructor() { }

  ngOnInit(): void {
      console.log("init")
  }

}
