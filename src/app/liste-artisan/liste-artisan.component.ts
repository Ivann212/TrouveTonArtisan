import { Component } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-liste-artisan',
  templateUrl: './liste-artisan.component.html',
  styleUrl: './liste-artisan.component.scss'
})
export class ListeArtisanComponent {
  artisans:any[] = [];
  constructor( private DatasService: DatasService) { }

  ngOnInit(): void {
    this.artisans = this.DatasService.artisans
    
  }
}
