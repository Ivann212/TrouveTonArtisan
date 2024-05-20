import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { Page404Component } from './page404/page404.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { DonneespersonnellesComponent } from './donneespersonnelles/donneespersonnelles.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { SortbynotePipe } from './sortbynote.pipe';
import { CategoryComponent } from './category/category.component';
import { NameComponent } from './name/name.component';
import { LocationComponent } from './location/location.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    FooterComponent,
    AccueilComponent,
    ListeArtisanComponent,
    FicheArtisanComponent,
    Page404Component,
    MentionsLegalesComponent,
    DonneespersonnellesComponent,
    AccessibiliteComponent,
    CookiesComponent,
    SortbynotePipe,
    NameComponent,
    LocationComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
