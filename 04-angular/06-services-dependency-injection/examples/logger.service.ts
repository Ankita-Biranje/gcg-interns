import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service a singleton and available throughout the app
})
export class LoggerService {
  log(message: string) {
    console.log(`Log: ${message}`);
  }

  error(message: string) {
    console.error(`Error: ${message}`);
  }
}
