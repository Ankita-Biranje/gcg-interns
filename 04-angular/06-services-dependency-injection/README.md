# Services & Dependency Injection

Services are used to share data logic across multiple components.
Dependency Injection (DI) is how Angular provides these services to components.

## 1. Creating a Service

Services are classes decorated with `@Injectable`.
Always provide them in `'root'` to make them available application-wide (Singleton).

```typescript
// src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Available everywhere
})
export class DataService {
  private data: string[] = ['Alpha', 'Beta', 'Gamma'];

  getData() {
    return this.data;
  }
}
```

## 2. Injecting a Service (`inject()`)

The modern way to inject a service is using the `inject()` function. This replaces constructor-based injection.

```typescript
// src/app/data-list/data-list.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-list',
  standalone: true,
  template: `
    <ul>
      @for (item of items; track item) {
        <li>{{ item }}</li>
      }
    </ul>
  `
})
export class DataListComponent implements OnInit {
  // Inject the service
  private dataService = inject(DataService);

  items: string[] = [];

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
```

### Why `inject()`?
- **Cleaner**: No constructor boilerplate.
- **Type-safe**: Automatically infers the type.
- **Flexible**: Can be used in functions (like Guard functions) outside of classes.

## 3. Functional Guards

In modern Angular, Route Guards are simple functions that use `inject()`.

```typescript
// auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
```
