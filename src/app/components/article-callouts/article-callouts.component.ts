import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalloutsService } from 'src/app/services/callouts.service';
import { Article } from 'src/interfaces/article';

@Component({
  selector: 'edureka-article-callouts',
  templateUrl: './article-callouts.component.html',
  styleUrls: ['./article-callouts.component.css']
})
export class ArticleCalloutsComponent implements OnInit {

  public news : Article[] = this.callouts.getCallouts(3)

  constructor(private callouts: CalloutsService) { }

  ngOnInit(): void {

  }
}
