# Angular Directives

Directives are classes that add additional behavior to elements in your Angular applications. They allow you to manipulate the DOM by changing its appearance, structure, or behavior. Angular has three kinds of directives:

1.  **Components**: Directives with a template. (We've already covered these).
2.  **Structural Directives**: Change the DOM layout by adding and removing DOM elements.
3.  **Attribute Directives**: Change the appearance or behavior of an element, component, or another directive.

## 1. Structural Directives

Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.

### `*ngIf`

The `*ngIf` directive conditionally adds or removes an element from the DOM based on a truthy/falsy expression.

```html
<!-- app.component.html -->
<button (click)="toggleVisibility()">Toggle Div</button>
<div *ngIf="isVisible">
  <p>This div is visible.</p>
</div>
<div *ngIf="!isVisible">
  <p>This div is hidden.</p>
</div>

<!-- With else block -->
<div *ngIf="isLoggedIn; else loggedOut">
  Welcome, user!
</div>
<ng-template #loggedOut>
  Please log in.
</ng-template>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isVisible: boolean = true;
  isLoggedIn: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
```

### `*ngFor`

The `*ngFor` directive repeats a DOM node for each item in a list.

```html
<!-- app.component.html -->
<ul>
  <li *ngFor="let item of items; let i = index; trackBy: trackByFn">
    {{ i }}: {{ item }}
  </li>
</ul>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: string[] = ['Apple', 'Banana', 'Cherry'];

  trackByFn(index: number, item: string): number {
    return index; // Or a unique ID from the item if available
  }
}
```

### `*ngSwitch`

The `*ngSwitch` directive is similar to a JavaScript `switch` statement, allowing you to conditionally render elements based on a match.

```html
<!-- app.component.html -->
<div [ngSwitch]="currentChoice">
  <div *ngSwitchCase="'option1'">You chose Option 1</div>
  <div *ngSwitchCase="'option2'">You chose Option 2</div>
  <div *ngSwitchDefault>Make a choice</div>
</div>
<button (click)="setChoice('option1')">Choose 1</button>
<button (click)="setChoice('option2')">Choose 2</button>
<button (click)="setChoice('none')">Choose None</button>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentChoice: string = 'none';

  setChoice(choice: string) {
    this.currentChoice = choice;
  }
}
```

## 2. Attribute Directives

Attribute directives change the appearance or behavior of an element, component, or another directive. They look like regular HTML attributes.

### `ngClass`

The `ngClass` directive allows you to add or remove CSS classes conditionally.

```html
<!-- app.component.html -->
<div [ngClass]="{ 'highlight': isHighlighted, 'bold-text': isBold }">
  This text changes class based on conditions.
</div>
<button (click)="toggleHighlight()">Toggle Highlight</button>
<button (click)="toggleBold()">Toggle Bold</button>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHighlighted: boolean = false;
  isBold: boolean = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }
}
```

```css
/* app.component.css */
.highlight {
  background-color: yellow;
}
.bold-text {
  font-weight: bold;
}
```

### `ngStyle`

The `ngStyle` directive allows you to set multiple inline CSS styles conditionally.

```html
<!-- app.component.html -->
<div [ngStyle]="currentStyles">
  This text changes style based on conditions.
</div>
<button (click)="applyStyles()">Apply Styles</button>
<button (click)="clearStyles()">Clear Styles</button>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentStyles: Record<string, string> = {};

  applyStyles() {
    this.currentStyles = {
      'background-color': 'lightblue',
      'font-size': '20px',
      'border': '1px solid blue'
    };
  }

  clearStyles() {
    this.currentStyles = {};
  }
}
```
