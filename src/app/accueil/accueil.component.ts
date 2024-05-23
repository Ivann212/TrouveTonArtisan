import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  artisans: any[] = [];
  topArtisans: any[] = [];

  constructor(private datasService: DatasService, private router: Router) { }

  ngOnInit(): void {
    this.artisans = this.datasService.artisans;
  }
  viewArtisan(id: number): void{
    this.router.navigate(['/artisan', id])
  }
}
