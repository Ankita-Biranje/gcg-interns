# Angular Directives & Control Flow

Directives classes that add additional behavior to elements in your Angular applications.
Modern Angular (v17+) introduces a new built-in **Control Flow** syntax that replaces many traditional structural directives (`*ngIf`, `*ngFor`).

## 1. Control Flow (The New Standard)

Angular's control flow provides a cleaner, more performant way to write logic in your templates.

### Conditional rendering (`@if`)

Replaces `*ngIf`.

```html
<button (click)="toggleVisibility()">Toggle</button>

@if (isVisible) {
  <div class="box">Content is visible!</div>
} @else {
  <div class="box hidden">Content is hidden.</div>
}
```

```typescript
// Component logic
isVisible = true;

toggleVisibility() {
  this.isVisible = !this.isVisible;
}
```

### Lists (`@for`)

Replaces `*ngFor`.
**Crucial:** You must provide a `track` expression. This tells Angular how to identify unique items for performance optimization.

```html
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>No items found.</li>
  }
</ul>
```

The `@empty` block is automatically shown if the list is empty.

### Switch (`@switch`)

Replaces `*ngSwitch`.

```html
@switch (userRole) {
  @case ('admin') {
    <admin-dashboard />
  }
  @case ('user') {
    <user-dashboard />
  }
  @default {
    <guest-view />
  }
}
```

## 2. Default Attribute Directives

These change the appearance or behavior of an element.

### `[class]` binding
The legacy `ngClass` is often replaced by direct binding:

```html
<!-- Conditionally add 'active' class if isActive is true -->
<div [class.active]="isActive">...</div>

<!-- Add multiple classes -->
<div [class]="isActive ? 'active-class' : 'inactive-class'">...</div>
```

### `[style]` binding
Similarly for `ngStyle`:

```html
<div [style.width.px]="widthValue">...</div>
<div [style.color]="isError ? 'red' : 'green'">...</div>
```

## 3. Custom Directives (Standalone)

You can create your own directives. Like components, they should be **standalone**.

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
```

**Usage:**
Remember to import it into your component's `imports` array!

```typescript
@Component({
  standalone: true,
  imports: [HighlightDirective],
  template: `<p [appHighlight]="'lightblue'">Hover me!</p>`
})
export class AppComponent {}
```
