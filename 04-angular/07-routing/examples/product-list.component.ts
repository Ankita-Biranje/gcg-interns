import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product List</h2>
    <button (click)="goToProductDetail(1)">Go to Product 1</button>
    <button (click)="goToProductDetail(2)">Go to Product 2</button>
  `,
})
export class ProductListComponent {
  constructor(private router: Router) { }

  goToProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
