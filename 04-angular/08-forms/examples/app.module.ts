import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here for template-driven forms
    ReactiveFormsModule // Add ReactiveFormsModule here for reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
