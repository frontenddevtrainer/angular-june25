import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { NewsDetailPageComponent } from './screens/news-detail-page/news-detail-page.component';
import { NewsListingPageComponent } from './screens/news-listing-page/news-listing-page.component';

const routes: Routes = [
  {
    path : "", component : HomepageComponent
  },
  {
    path : "news/:category", component : NewsListingPageComponent
  },
  {
    path : "news/details/:id", component : NewsDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
