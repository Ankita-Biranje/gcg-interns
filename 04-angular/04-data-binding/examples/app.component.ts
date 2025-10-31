import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Interpolation
  pageTitle: string = 'Welcome to Data Binding';
  counter: number = 0;

  // Property Binding
  isButtonDisabled: boolean = true;
  imageUrl: string = 'https://via.placeholder.com/150';
  imageAltText: string = 'Placeholder Image';
  ariaLabel: string = 'This is an accessible div';

  // Event Binding
  inputValue: string = '';

  // Two-Way Data Binding
  userName: string = 'Guest';

  constructor() {
    // For Interpolation example
    setInterval(() => {
      this.counter++;
    }, 1000);

    // For Property Binding example
    setTimeout(() => {
      this.isButtonDisabled = false; // Enable button after 3 seconds
    }, 3000);
  }

  // For Event Binding example
  onClick() {
    console.log('Button clicked!');
  }

  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
