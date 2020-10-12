import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/shared/cards/cards.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchcardComponent } from './components/shared/searchcard/searchcard.component';
import { SearchqueryPipe } from './pipes/searchquery.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CarouselComponent } from './components/shared/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    CardsComponent,
    MovieComponent,
    SearchcardComponent,
    SearchqueryPipe,
    NoimagePipe,
    CarouselComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }