import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatasService } from '../datas.service';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  artisans: any[] = [];
  location: string = '';

  constructor(private route: ActivatedRoute, private datasService: DatasService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.location = params.get('location')!;
      this.artisans = this.datasService.getArtisansByLocation(this.location);
    });
  };

  viewArtisan(id: number): void{
    this.router.navigate(['/artisan', id])
  }
}
