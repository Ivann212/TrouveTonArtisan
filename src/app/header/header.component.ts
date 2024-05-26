import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) { }

  search() {
    if (this.searchQuery) {
      // Assuming the search query is for a category
      this.router.navigate(['/category', this.searchQuery]);
    }
  }
}