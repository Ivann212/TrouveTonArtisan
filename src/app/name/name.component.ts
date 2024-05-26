import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  artisans: any[] = [];
  name: string = '';

  constructor(private route: ActivatedRoute, private datasService: DatasService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      this.artisans = this.datasService.getArtisansByName(this.name);
    });
  }
}