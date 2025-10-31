# Angular Routing

Routing is a core feature in single-page applications (SPAs) that allows users to navigate between different views (components) without a full page reload. Angular's Router module enables you to define navigation paths, handle URL changes, and manage application state based on the current route.

## 1. Setting Up Routing

When you create a new Angular project using `ng new` and choose to add routing, the CLI generates an `AppRoutingModule` (or similar) and configures the basic routing setup.

### `app-routing.module.ts`

This module is where you define your application's routes. Each route maps a URL path to a component.

```typescript
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### `app.module.ts`

The `AppRoutingModule` is then imported into your main `AppModule`.

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add your routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### `app.component.html`

The `router-outlet` directive acts as a placeholder where Angular dynamically inserts the component corresponding to the current route.

```html
<!-- src/app/app.component.html -->
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>

<router-outlet></router-outlet> <!-- Router renders components here -->
```

## 2. Navigation

Angular provides two main ways to navigate:

### `routerLink` Directive

Use the `routerLink` directive in your templates for declarative navigation.

```html
<a routerLink="/products">Products</a>
<a [routerLink]="['/products', productId]">View Product</a>
```

### `Router` Service

Inject the `Router` service into your components for programmatic navigation.

```typescript
// src/app/product-list/product-list.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  template: `
    <button (click)="goToProductDetail(1)">Go to Product 1</button>
  `,
})
export class ProductListComponent {
  constructor(private router: Router) { }

  goToProductDetail(id: number) {
    this.router.navigate(['/products', id]);
  }
}
```

## 3. Route Parameters

You can define routes that accept parameters, allowing you to pass dynamic data to components.

### Defining a Route with Parameters

```typescript
// src/app/app-routing.module.ts
const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
];
```

### Accessing Route Parameters

Use the `ActivatedRoute` service to access route parameters within your component.

```typescript
// src/app/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <h2>Product Detail</h2>
    <p>Product ID: {{ productId }}</p>
  `,
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
  }
}
```

## 4. Child Routes (Nested Routes)

You can define child routes to create nested views within a parent component.

```typescript
// src/app/app-routing.module.ts
const routes: Routes = [
  { 
    path: 'admin', 
    component: AdminDashboardComponent, 
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: AdminOverviewComponent },
      { path: 'users', component: AdminUsersComponent },
    ]
  },
];
```

```html
<!-- src/app/admin-dashboard/admin-dashboard.component.html -->
<nav>
  <a routerLink="./overview">Overview</a>
  <a routerLink="./users">Users</a>
</nav>
<router-outlet></router-outlet> <!-- Child routes render here -->
```
