import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  keyword: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.keyword.trim() !== '') {
      
      this.router.navigate(['/search'], { queryParams: { q: this.keyword } });
    }
  }
}