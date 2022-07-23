import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleCalloutComponent } from './components/article-callout/article-callout.component';
import { ArticleCalloutsComponent } from './components/article-callouts/article-callouts.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { NewsTableComponent } from './components/news-table/news-table.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnderlineDirective } from './directives/underline.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FakeApiInterceptor } from './services/fake-api.interceptor';

// Component - Required in declarations
// Directives - Required in declarations
// Pipe - Required in declarations
// Service - Not Required to be updated in module

import { environment } from "../environments/environment";
import { UsersTableComponent } from './components/users-table/users-table.component';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { NewsListingPageComponent } from './screens/news-listing-page/news-listing-page.component';
import { NewsDetailPageComponent } from './screens/news-detail-page/news-detail-page.component';
import { PrivacyPolicyPageComponent } from './screens/privacy-policy-page/privacy-policy-page.component';
import { ContactPageComponent } from './screens/contact-page/contact-page.component';
import { NotFoundPageComponent } from './screens/not-found-page/not-found-page.component';
import { LoginPageComponent } from './screens/login-page/login-page.component';
import { RegisterPageComponent } from './screens/register-page/register-page.component';
import { ApplyLoanComponent } from './screens/apply-loan/apply-loan.component'
import { ApplyLoanFormComponent } from './components/apply-loan/apply-loan.component'

// All prod and non prod
const interceptors = [
  
];

if (!environment.production) {
  // non prod
  interceptors.push({ provide: HTTP_INTERCEPTORS, useClass: FakeApiInterceptor, multi: true })
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GalleryComponent,
    ArticleCalloutComponent,
    ArticleCalloutsComponent,
    LoginFormComponent,
    LifecycleDemoComponent,
    NewsTableComponent,
    HighlightDirective,
    UnderlineDirective,
    UppercasePipe,
    UsersTableComponent,
    HomepageComponent,
    NewsListingPageComponent,
    NewsDetailPageComponent,
    PrivacyPolicyPageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ApplyLoanComponent,
    ApplyLoanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ...interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
