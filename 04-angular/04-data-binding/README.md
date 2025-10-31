# Angular Data Binding

Data binding is a mechanism that synchronizes data between the component's TypeScript code and its HTML template. Angular supports several types of data binding, allowing you to control how data flows in your application.

## 1. Interpolation (`{{ ... }}`)

Interpolation is a one-way data binding technique that allows you to display a component property's value in the template. The value is converted to a string and inserted into the HTML.

```html
<!-- app.component.html -->
<h1>{{ pageTitle }}</h1>
<p>Current count: {{ counter }}</p>
<p>Expression: {{ 1 + 1 }}</p>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  pageTitle: string = 'Welcome to Data Binding';
  counter: number = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
```

## 2. Property Binding (`[property]=expression`)

Property binding is a one-way data binding technique that allows you to set the value of an HTML element's property to a component property's value. It flows data from the component to the DOM.

```html
<!-- app.component.html -->
<button [disabled]="isButtonDisabled">Click Me</button>
<img [src]="imageUrl" [alt]="imageAltText">
<div [attr.aria-label]="ariaLabel">Accessible Div</div>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isButtonDisabled: boolean = true;
  imageUrl: string = 'https://via.placeholder.com/150';
  imageAltText: string = 'Placeholder Image';
  ariaLabel: string = 'This is an accessible div';

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false; // Enable button after 3 seconds
    }, 3000);
  }
}
```

## 3. Event Binding (`(event)=statement`)

Event binding is a one-way data binding technique that allows you to respond to user actions (like clicks, keypresses, etc.) or other events in the DOM. It flows data from the DOM to the component.

```html
<!-- app.component.html -->
<button (click)="onClick()">Log Message</button>
<input (input)="onInput($event)" placeholder="Type something">
<p>Input value: {{ inputValue }}</p>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  inputValue: string = '';

  onClick() {
    console.log('Button clicked!');
  }

  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
```

## 4. Two-Way Data Binding (`[(ngModel)]=property`)

Two-way data binding combines property binding and event binding to provide a synchronized flow of data between the component and the DOM. Changes in the component update the DOM, and changes in the DOM update the component.

This typically uses the `ngModel` directive, which requires importing `FormsModule` into your Angular module.

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<input [(ngModel)]="userName" placeholder="Enter your name">
<p>Hello, {{ userName }}!</p>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  userName: string = 'Guest';
}
```
