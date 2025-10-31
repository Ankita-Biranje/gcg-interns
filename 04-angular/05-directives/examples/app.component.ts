import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // *ngIf examples
  isVisible: boolean = true;
  isLoggedIn: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  // *ngFor example
  items: string[] = ['Apple', 'Banana', 'Cherry'];

  trackByFn(index: number, item: string): number {
    return index; // Or a unique ID from the item if available
  }

  // *ngSwitch example
  currentChoice: string = 'none';

  setChoice(choice: string) {
    this.currentChoice = choice;
  }

  // ngClass example
  isHighlighted: boolean = false;
  isBold: boolean = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  // ngStyle example
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
