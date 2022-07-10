import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms"
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
import { UsersTableComponent } from './components/users-table/users-table.component'

const interceptors = [];

if (!environment.production) {
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
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ...interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
