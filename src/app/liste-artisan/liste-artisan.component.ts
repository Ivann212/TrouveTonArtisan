import { Component } from '@angular/core';
import { DatasService } from '../datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-artisan',
  templateUrl: './liste-artisan.component.html',
  styleUrl: './liste-artisan.component.scss'
})
export class ListeArtisanComponent {
  artisans:any[] = [];
  constructor( private DatasService: DatasService, private router: Router) { }

  ngOnInit(): void {
    this.artisans = this.DatasService.artisans
    
  }
  viewArtisan(id: number): void{
    this.router.navigate(['/artisan', id])
  }
}
