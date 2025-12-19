# Data Binding & Signals

Data binding is the mechanism that coordinates the data between your component (TypeScript) and your template (HTML).
Modern Angular introduces **Signals** as the preferred way to handle data.

## 1. Types of Data Binding

### Interpolation `{{ }}`
Displays data from the component in the template.

```html
<p>Welcome, {{ userName }}!</p>
```

### Property Binding `[ ]`
Passes values from the component to the properties of an HTML element or another component.

```html
<img [src]="userImageUrl" [alt]="userName">
<button [disabled]="isSubmitting">Submit</button>
```

### Event Binding `( )`
Listens for events in the template and executes a method in the component.

```html
<button (click)="onSave()">Save</button>
<input (input)="onInput($event)">
```

## 2. Two-Way Binding `[( )]` (Signals)

Traditionally `[(ngModel)]` was used. With Signals, we use the `model()` input or handle it explicitly.
*Note: `ngModel` requires `FormsModule` to be imported.*

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-example',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="name" />
    <p>Hello, {{ name }}!</p>
  `
})
export class BindingExampleComponent {
  // Traditional property
  name: string = 'Angular';
}
```

## 3. Input Properties (Signal Inputs)

The modern way to receive data in a child component is via `input()`.

```typescript
// child.component.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ name() }}</h3> <!-- Access signal value with () -->
      <p>Role: {{ role() }}</p>
    </div>
  `
})
export class UserCardComponent {
  // Define inputs as signals
  // If no value is passed, 'Guest' is default
  name = input<string>('Guest');

  // Request/Required input
  role = input.required<string>();
}
```

```html
<!-- parent.component.html -->
<app-user-card [name]="'Alice'" [role]="'Admin'" />
```

## 4. Output Events (Signal Outputs)

Modern outputs use the `output()` function.

```typescript
import { Component, output } from '@angular/core';

@Component({ ... })
export class ChildComponent {
  // Create an output event
  delete = output<number>();

  onDeleteClick(id: number) {
    this.delete.emit(id);
  }
}
```

In the parent HTML:
```html
<app-child (delete)="handleDelete($event)" />
```
