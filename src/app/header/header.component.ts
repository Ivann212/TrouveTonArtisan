import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string = '';
  searchType: string = 'name';  // Valeur par défaut

  constructor(private router: Router) { }

  search() {
    if (this.searchQuery) {
      this.router.navigate([`/${this.searchType}`, this.searchQuery]);
    }
  }
}