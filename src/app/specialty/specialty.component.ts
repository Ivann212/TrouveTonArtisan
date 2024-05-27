import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrl: './specialty.component.scss'
})
export class SpecialtyComponent {
  artisans: any[] = [];
  specialty: string = '';

  constructor(private route: ActivatedRoute, private datasService: DatasService , private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.specialty = params.get('specialty')!;
      this.artisans = this.datasService.getArtisansBySpecialty(this.specialty);
    });
  }
  viewArtisan(id: number): void{
    this.router.navigate(['/artisan', id])
  }

}
