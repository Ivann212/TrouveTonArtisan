import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { Page404Component } from './page404/page404.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { DonneespersonnellesComponent } from './donneespersonnelles/donneespersonnelles.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { SortbynotePipe } from './sortbynote.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ListeArtisanComponent,
    FicheArtisanComponent,
    Page404Component,
    BatimentComponent,
    ServicesComponent,
    FabricationComponent,
    AlimentationComponent,
    MentionsLegalesComponent,
    DonneespersonnellesComponent,
    AccessibiliteComponent,
    CookiesComponent,
    SortbynotePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
