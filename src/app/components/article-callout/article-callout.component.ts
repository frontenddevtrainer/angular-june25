import { Component, OnInit, Input } from '@angular/core';
import { Article } from "../../../interfaces/article"

@Component({
  selector: 'edureka-article-callout',
  templateUrl: './article-callout.component.html',
  styleUrls: ['./article-callout.component.css']
})
export class ArticleCalloutComponent implements OnInit {

  // Also create public property as article.
  @Input() article !: Article

  constructor() { }

  ngOnInit(): void {
  }

}
