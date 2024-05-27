import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AccueilComponent } from './accueil/accueil.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { Page404Component } from './page404/page404.component';
import { CookiesComponent } from './cookies/cookies.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { DonneespersonnellesComponent } from './donneespersonnelles/donneespersonnelles.component';
import { CategoryComponent } from './category/category.component';
import { NameComponent } from './name/name.component';
import { LocationComponent } from './location/location.component';
import { SpecialtyComponent } from './specialty/specialty.component';


const routes: Routes = [
  

  {path: "", component: AccueilComponent}, 
  {path: "category/:category", component: CategoryComponent},
  {path: "location/:location", component: LocationComponent},
  {path: "name/:name", component: NameComponent},
  {path: "specialty/:specialty", component: SpecialtyComponent},
  {path: "artisan/:id", component: FicheArtisanComponent}, 
  {path: "listeArtisan", component: ListeArtisanComponent},  
  {path: "cookies", component: CookiesComponent},
  {path: "mentionslegales", component: MentionsLegalesComponent},
  {path: "accessibilite", component: AccessibiliteComponent},
  {path: "donneespersonnelles", component: DonneespersonnellesComponent},
  {path: "**", pathMatch:'full', component: Page404Component} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
