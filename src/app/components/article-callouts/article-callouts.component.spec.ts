import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCalloutsComponent } from './article-callouts.component';

describe('ArticleCalloutsComponent', () => {
  let component: ArticleCalloutsComponent;
  let fixture: ComponentFixture<ArticleCalloutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCalloutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCalloutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
