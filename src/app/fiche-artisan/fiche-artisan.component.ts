import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrls: ['./fiche-artisan.component.scss']
})
export class FicheArtisanComponent implements OnInit {
  artisan: any;

  constructor(
    private route: ActivatedRoute,
    private datasService: DatasService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artisan = this.datasService.artisans.find(a => a.id === id);
  }
}
