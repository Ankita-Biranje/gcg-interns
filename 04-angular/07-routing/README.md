# Angular Routing (Standalone)

Routing allows navigation between views. In modern Angular with Standalone Components, routing is simpler and often configured without `NgModule`.

## 1. Setting Up Routing

In a modern standalone app, routes are defined in a `routes` array and provided via `app.config.ts`.

### `app.routes.ts`

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Lazy load a standalone component
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  // Route with parameters
  { path: 'user/:id', loadComponent: () => ... },
  { path: '**', redirectTo: '' }
];
```

### `app.config.ts`

This file replaces `app.module.ts` providers.

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()) // Enable router
  ]
};
```

### `app.component.html`

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>

<router-outlet />
```

## 2. Navigation

Navigation remains largely the same, but injecting the Router is done via `inject()`.

### `routerLink`

```html
<a routerLink="/dashboard">Dashboard</a>
<a [routerLink]="['/user', userId]">User Profile</a>
```

### Programmatic Navigation

```typescript
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({ ... })
export class loginComponent {
  private router = inject(Router);

  login() {
    // ... logic ...
    this.router.navigate(['/dashboard']);
  }
}
```

## 3. Accessing Route Parameters

### Component Input Binding (Recommended)
By adding `withComponentInputBinding()` to your router provider, route parameters are automatically bound to component inputs.

```typescript
// user.component.ts
import { Component, input } from '@angular/core';

@Component({ ... })
export class UserComponent {
  // Matches path: 'user/:id'
  id = input.required<string>();

  // Matches ?query=...
  query = input<string>();
}
```

### `ActivatedRoute` (Traditional)
You can still use `ActivatedRoute` if needed.

```typescript
private route = inject(ActivatedRoute);

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    console.log(params.get('id'));
  });
}
```

## 4. Functional Guards

Class-based guards are deprecated. Use functional guards.

```typescript
// auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn() || router.createUrlTree(['/login']);
};
```

**Usage in Routes:**

```typescript
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [authGuard]
}
```
