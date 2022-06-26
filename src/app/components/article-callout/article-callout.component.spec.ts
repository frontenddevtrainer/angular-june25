import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCalloutComponent } from './article-callout.component';

describe('ArticleCalloutComponent', () => {
  let component: ArticleCalloutComponent;
  let fixture: ComponentFixture<ArticleCalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCalloutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
