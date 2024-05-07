import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';

import { AccueilComponent } from './accueil/accueil.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { Page404Component } from './page404/page404.component';
import { ServicesComponent } from './services/services.component';
import { BatimentComponent } from './batiment/batiment.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { FabricationComponent } from './fabrication/fabrication.component';

const routes: Routes = [
  {path: "", component: AccueilComponent}, 
  {path: "ficheArtisan", component: FicheArtisanComponent}, 
  {path: "listeArtisan", component: ListeArtisanComponent}, 
  {path: "service", component: ServicesComponent}, 
  {path: "batiment", component: BatimentComponent}, 
  {path: "alimentation", component: AlimentationComponent}, 
  {path: "fabrication", component: FabricationComponent},
  {path: "**", pathMatch:'full', component: Page404Component} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
