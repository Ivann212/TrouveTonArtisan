import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {

  artisans:any[] = [];

  constructor( private DatasService: DatasService) { }

  ngOnInit(): void {
    this.artisans = this.DatasService.artisans
  }
}

