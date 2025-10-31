import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <h2>Admin Dashboard</h2>
    <nav>
      <a routerLink="./overview">Overview</a> |
      <a routerLink="./users">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AdminDashboardComponent { }
