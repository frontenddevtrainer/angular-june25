import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleCalloutComponent } from './components/article-callout/article-callout.component';

// Component - Required in declarations
// Directives - Required in declarations
// Pipe - Required in declarations
// Service - Not Required to be updated in module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GalleryComponent,
    ArticleCalloutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
