import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  artisans: any[] = [];
  category: string = '';
  name: string = '';
  location: string = '';

  constructor(private route: ActivatedRoute, private datasService: DatasService, private router: Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.artisans = this.datasService.getArtisansByCategory(this.category);
    });
    this.route.paramMap.subscribe(params => {
      this.location = params.get('location')!;
      this.artisans = this.datasService.getArtisansByLocation(this.location);
    });

    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      this.artisans = this.datasService.getArtisansByName(this.name);
    });
    
  }
  viewArtisan(id: number): void{
    this.router.navigate(['/artisan', id])
  }
}

