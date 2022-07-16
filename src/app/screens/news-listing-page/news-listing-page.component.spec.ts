import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListingPageComponent } from './news-listing-page.component';

describe('NewsListingPageComponent', () => {
  let component: NewsListingPageComponent;
  let fixture: ComponentFixture<NewsListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
