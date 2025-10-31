# Angular Services and Dependency Injection

In Angular, services are a way to share code and data across components. They are typically used for tasks that don't involve the UI, such as fetching data from a server, logging, or performing complex calculations. Dependency Injection (DI) is a core concept in Angular that allows you to provide instances of services to components or other services that need them.

## 1. What is a Service?

A service is a plain TypeScript class that performs a specific task. It's usually decorated with `@Injectable()` to make it available for Angular's dependency injection system.

Services promote:

-   **Modularity**: Breaking down complex logic into smaller, reusable units.
-   **Reusability**: Sharing logic across multiple components.
-   **Maintainability**: Easier to test and maintain code.
-   **Separation of Concerns**: Keeping component logic focused on UI interactions.

```typescript
// src/app/logger.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service a singleton and available throughout the app
})
export class LoggerService {
  log(message: string) {
    console.log(`Log: ${message}`);
  }

  error(message: string) {
    console.error(`Error: ${message}`);
  }
}
```

## 2. Dependency Injection (DI)

Dependency Injection is a design pattern in which a class requests dependencies from external sources rather than creating them itself. Angular's DI system provides a way to supply a component with the services it needs.

### How it works:

1.  **Provider**: You configure an injector with a provider that can create a dependency.
2.  **Injector**: The injector creates the dependency and injects it into the component's constructor.
3.  **Consumer**: The component (or another service) declares its dependencies in its constructor.

```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="logMessage()">Log Message</button>
    <button (click)="logError()">Log Error</button>
  `,
})
export class AppComponent {
  constructor(private logger: LoggerService) { // Injecting the LoggerService
    this.logger.log('AppComponent initialized');
  }

  logMessage() {
    this.logger.log('Button clicked from AppComponent');
  }

  logError() {
    this.logger.error('An error occurred from AppComponent');
  }
}
```

## 3. Data Service Example

A common use case for services is to fetch and manage data.

```typescript
// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Item {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  getItems(): Observable<Item[]> {
    // Simulate fetching data from an API
    return of(this.items);
  }

  getItemById(id: number): Observable<Item | undefined> {
    return of(this.items.find(item => item.id === id));
  }
}
```

```typescript
// src/app/item-list/item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-item-list',
  template: `
    <h2>Items</h2>
    <ul>
      <li *ngFor="let item of items">{{ item.name }}</li>
    </ul>
  `,
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
```

## 4. Providers

Providers tell Angular how to create an instance of a service. The `@Injectable({ providedIn: 'root' })` syntax is the most common way to provide a service, making it a singleton available throughout the application.

You can also provide services at the module level or component level:

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // LoggerService // Providing at module level (alternative to providedIn: 'root')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// src/app/my-component/my-component.component.ts
import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-my-component',
  template: `<button (click)="logMessage()">Log from MyComponent</button>`,
  providers: [LoggerService] // Providing at component level (new instance for each component)
})
export class MyComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('MyComponent initialized');
  }

  logMessage() {
    this.logger.log('Button clicked from MyComponent');
  }
}
```
