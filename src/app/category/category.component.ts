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

  constructor(private route: ActivatedRoute, private datasService: DatasService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.artisans = this.datasService.getArtisansByCategory(this.category);
    });
  }

  viewArtisan(id: number): void {
    this.router.navigate(['/artisan', id]);
  }
}
