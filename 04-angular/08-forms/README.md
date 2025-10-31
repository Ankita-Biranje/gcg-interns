# Angular Forms

Angular provides two main approaches to handling user input through forms:

1.  **Template-driven forms**: These are simpler and suitable for basic forms. They rely heavily on directives in the template.
2.  **Reactive forms**: These are more robust and scalable, especially for complex forms. They are built programmatically in the component class.

Both approaches manage form input values, track user interaction, and validate input.

## 1. Template-Driven Forms

Template-driven forms are built using directives in the template. You don't write much component code; instead, you rely on Angular to create form controls and manage their state.

### Setup

To use template-driven forms, you need to import `FormsModule` into your Angular module.

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent
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

### Example

```html
<!-- src/app/template-driven-form/template-driven-form.component.html -->
<form #heroForm="ngForm" (ngSubmit)="onSubmit(heroForm)">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" [(ngModel)]="model.name" required #name="ngModel">
    <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">
      <div *ngIf="name.errors?.['required']">Name is required.</div>
    </div>
  </div>

  <div class="form-group">
    <label for="alterEgo">Alter Ego</label>
    <input type="text" id="alterEgo" name="alterEgo" [(ngModel)]="model.alterEgo">
  </div>

  <button type="submit" [disabled]="heroForm.invalid">Submit</button>
</form>

<p>Form Status: {{ heroForm.form.valid }}</p>
<p>Name Value: {{ model.name }}</p>
```

```typescript
// src/app/template-driven-form/template-driven-form.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Hero {
  name: string;
  alterEgo?: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  model: Hero = { name: 'Dr. Nice' };

  onSubmit(form: NgForm) {
    console.log('Form submitted!', form.value);
  }
}
```

## 2. Reactive Forms

Reactive forms provide a model-driven approach to handling form inputs whose values change over time. They are built around `FormControl`, `FormGroup`, and `FormArray` classes, which are created programmatically in the component class.

### Setup

To use reactive forms, you need to import `ReactiveFormsModule` into your Angular module.

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Example

```html
<!-- src/app/reactive-form/reactive-form.component.html -->
<form [formGroup]="heroForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" formControlName="name">
    <div *ngIf="nameControl?.invalid && (nameControl?.dirty || nameControl?.touched)" class="alert alert-danger">
      <div *ngIf="nameControl?.errors?.['required']">Name is required.</div>
      <div *ngIf="nameControl?.errors?.['minlength']">Name must be at least 4 characters long.</div>
    </div>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" formControlName="email">
    <div *ngIf="emailControl?.invalid && (emailControl?.dirty || emailControl?.touched)" class="alert alert-danger">
      <div *ngIf="emailControl?.errors?.['required']">Email is required.</div>
      <div *ngIf="emailControl?.errors?.['email']">Please enter a valid email.</div>
    </div>
  </div>

  <button type="submit" [disabled]="heroForm.invalid">Submit</button>
</form>

<p>Form Status: {{ heroForm.valid }}</p>
<p>Name Value: {{ heroForm.get('name')?.value }}</p>
```

```typescript
// src/app/reactive-form/reactive-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('Dr. Nice', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  get nameControl() {
    return this.heroForm.get('name');
  }

  get emailControl() {
    return this.heroForm.get('email');
  }

  onSubmit() {
    console.log('Form submitted!', this.heroForm.value);
  }
}
```
