# Angular Components

Components are the fundamental building blocks of an Angular application. They are essentially JavaScript/TypeScript classes that interact with an HTML template to render a view in the browser. Every Angular application has at least one component, the root component, typically named `AppComponent`.

## 1. Component Structure

An Angular component typically consists of three main parts:

-   **Template (HTML)**: Defines the component's view.
-   **Stylesheet (CSS/SCSS)**: Defines the component's appearance.
-   **Class (TypeScript)**: Contains the component's logic, data, and behavior.

These three parts are brought together by a `@Component` decorator.

## 2. `@Component` Decorator

The `@Component` decorator is a function that associates metadata with the component class. This metadata tells Angular how to process the class and render its view.

Key properties in the `@Component` decorator:

-   **`selector`**: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in the HTML. (e.g., `app-root`).
-   **`templateUrl`** or **`template`**: Specifies the HTML template for the component. `templateUrl` points to an external HTML file, while `template` allows you to define the HTML inline as a string.
-   **`styleUrls`** or **`styles`**: Specifies the CSS styles for the component. `styleUrls` points to external CSS files, while `styles` allows you to define CSS inline as a string.

```typescript
// src/app/hello-world/hello-world.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message: string = 'Hello from HelloWorldComponent!';
}
```

```html
<!-- src/app/hello-world/hello-world.component.html -->
<div>
  <h2>{{ message }}</h2>
  <p>This is a simple Angular component.</p>
</div>
```

```css
/* src/app/hello-world/hello-world.component.css */
div {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}
h2 {
  color: #333;
}
p {
  color: #666;
}
```

## 3. Creating a Component (`ng generate component`)

You can use the Angular CLI to quickly generate a new component:

```bash
ng generate component hello-world
# or
ng g c hello-world
```

This command will create the component files (TypeScript, HTML, CSS, and spec file) and automatically declare it in the nearest Angular module.

## 4. Using a Component

Once a component is created and declared in an Angular module, you can use its selector in the HTML templates of other components.

```html
<!-- src/app/app.component.html -->
<h1>My Angular App</h1>
<app-hello-world></app-hello-world> <!-- Using the HelloWorldComponent -->
```

## 5. Component Lifecycle Hooks

Angular components have a lifecycle managed by Angular. Angular provides lifecycle hook interfaces that allow you to tap into key moments in a component's life, such as initialization, change detection, and destruction.

Common lifecycle hooks:

-   **`ngOnInit()`**: Called once, after the component's data-bound properties are initialized. Good for fetching data.
-   **`ngOnChanges()`**: Called before `ngOnInit()` and whenever one or more data-bound input properties change.
-   **`ngDoCheck()`**: Detects and acts upon changes that Angular can't or won't detect on its own.
-   **`ngAfterContentInit()`**: Called after Angular projects external content into the component's view.
-   **`ngAfterContentChecked()`**: Called after Angular checks the content projected into the component.
-   **`ngAfterViewInit()`**: Called after Angular initializes the component's views and child views.
-   **`ngAfterViewChecked()`**: Called after Angular checks the component's views and child views.
-   **`ngOnDestroy()`**: Called just before Angular destroys the component. Good for cleanup.

```typescript
// src/app/lifecycle-example/lifecycle-example.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  template: `
    <h2>Lifecycle Example</h2>
    <p>Check the console for lifecycle hook messages.</p>
  `,
  styles: [`
    h2 { color: blue; }
  `]
})
export class LifecycleExampleComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
```
