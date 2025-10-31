import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-my-component',
  template: `<button (click)="logMessage()">Log from MyComponent</button>`,
  providers: [LoggerService] // Providing at component level (new instance for each component)
})
export class MyComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('MyComponent initialized');
  }

  logMessage() {
    this.logger.log('Button clicked from MyComponent');
  }
}
