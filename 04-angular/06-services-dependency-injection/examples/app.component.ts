import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="logMessage()">Log Message</button>
    <button (click)="logError()">Log Error</button>
    <app-item-list></app-item-list>
    <app-my-component></app-my-component>
  `,
})
export class AppComponent {
  constructor(private logger: LoggerService) { // Injecting the LoggerService
    this.logger.log('AppComponent initialized');
  }

  logMessage() {
    this.logger.log('Button clicked from AppComponent');
  }

  logError() {
    this.logger.error('An error occurred from AppComponent');
  }
}
