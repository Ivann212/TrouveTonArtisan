import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';

import { AccueilComponent } from './accueil/accueil.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: "", component: AccueilComponent}, 
  {path: "ficheArtisan", component: FicheArtisanComponent}, 
  {path: "listeArtisan", component: ListeArtisanComponent}, 
  {path: "**", pathMatch:'full', component: Page404Component} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
