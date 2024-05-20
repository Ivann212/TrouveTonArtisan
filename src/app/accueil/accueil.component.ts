import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  artisans: any[] = [];
  topArtisans: any[] = [];

  constructor(private datasService: DatasService) { }

  ngOnInit(): void {
    this.artisans = this.datasService.artisans;
    
  }
}
