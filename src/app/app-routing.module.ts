import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ContactPageComponent } from './screens/contact-page/contact-page.component';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { LoginPageComponent } from './screens/login-page/login-page.component';
import { NewsDetailPageComponent } from './screens/news-detail-page/news-detail-page.component';
import { NewsListingPageComponent } from './screens/news-listing-page/news-listing-page.component';
import { NotFoundPageComponent } from './screens/not-found-page/not-found-page.component';
import { PrivacyPolicyPageComponent } from './screens/privacy-policy-page/privacy-policy-page.component';

const routes: Routes = [
  {
    path : "", component : HomepageComponent
  },
  {
    path : "login", component : LoginPageComponent
  },
  {
    // news/sports
    path : "news/:category", component : NewsListingPageComponent
  },
  {
    path : "news/details/:id", component : NewsDetailPageComponent
  },
  {
    path : "privacy-policy", component : PrivacyPolicyPageComponent
  },
  {
    path : "contact", component : ContactPageComponent, canActivate : [ AuthGuard ]
  },
  {
    path : "**", component : NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
