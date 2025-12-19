# Angular Components

Components are the fundamental building blocks of an Angular application. They are essentially JavaScript/TypeScript classes that interact with an HTML template to render a view in the browser.

In Modern Angular (v14+), components are **Standalone** by default. This means they do not need to be declared in an `NgModule`.

## 1. Component Structure

An Angular component typically consists of three main parts:

-   **Template (HTML)**: Defines the component's view.
-   **Stylesheet (CSS/SCSS)**: Defines the component's appearance.
-   **Class (TypeScript)**: Contains the component's logic, data, and behavior.

These three parts are brought together by a `@Component` decorator.

## 2. `@Component` Decorator & Standalone

The `@Component` decorator is where you define that a class is a component.

Key properties:

-   **`standalone: true`**: **(Important)** Marks the component as standalone. This is the recommendation for all new Angular components.
-   **`selector`**: The HTML tag name for this component (e.g., `app-root`).
-   **`imports`**: A list of other standalone components, directives, or pipes that this component uses in its template.
-   **`templateUrl`** / **`template`**: The HTML (or path to it).
-   **`styleUrls`** / **`styles`**: The CSS (or path to it).

```typescript
// src/app/hello-world/hello-world.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for basic directives if needed

@Component({
  selector: 'app-hello-world',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Add dependencies here
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message: string = 'Hello from a Standalone Component!';
}
```

```html
<!-- src/app/hello-world/hello-world.component.html -->
<div class="card">
  <h2>{{ message }}</h2>
  <p>This is a modern Angular component.</p>
</div>
```

## 3. Creating a Component (CLI)

Use the Angular CLI to generate a new standalone component:

```bash
ng generate component hello-world
# or short:
ng g c hello-world
```

*Note: In Angular 17+, the CLI generates standalone components by default.*

## 4. Using a Component

To use component A inside component B, you must **import** A into B's `imports` array.

**Example:** Using `HelloWorldComponent` inside `AppComponent`.

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent], // Import it here!
  template: `
    <h1>My Angular App</h1>
    <app-hello-world></app-hello-world>
  `
})
export class AppComponent {}
```

## 5. Component Lifecycle Hooks

Angular provides hooks to tap into key moments in a component's life.

-   **`ngOnInit()`**: Called once after initialization. Good for fetching initial data.
-   **`ngOnDestroy()`**: Called just before the component is destroyed. Cleanup (subscriptions, timers).
-   **`ngOnChanges()`**: Called when an input property changes.

```typescript
// src/app/lifecycle-example/lifecycle-example.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  standalone: true,
  template: `<p>Check the console.</p>`
})
export class LifecycleExampleComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called - Component Initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called - Component/Route changed');
  }
}
```
