import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  keyword: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.keyword.trim() !== '') {
      // Redirigir a la página de resultados con la palabra clave como parámetro de consulta
      this.router.navigate(['/search'], { queryParams: { q: this.keyword } });
    }
  }
}
