import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AccueilComponent } from './accueil/accueil.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { Page404Component } from './page404/page404.component';
import { ServicesComponent } from './services/services.component';
import { BatimentComponent } from './batiment/batiment.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { CookiesComponent } from './cookies/cookies.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { DonneespersonnellesComponent } from './donneespersonnelles/donneespersonnelles.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
  

  {path: "", component: AccueilComponent}, 
  {path: "category/:category", component: CategoryComponent},
  {path: "ficheArtisan", component: FicheArtisanComponent}, 
  {path: "listeArtisan", component: ListeArtisanComponent}, 
  {path: "service", component: ServicesComponent}, 
  {path: "batiment", component: BatimentComponent}, 
  {path: "alimentation", component: AlimentationComponent}, 
  {path: "fabrication", component: FabricationComponent},
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
