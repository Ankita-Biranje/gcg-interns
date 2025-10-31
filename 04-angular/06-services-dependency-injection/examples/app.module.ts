import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list.component';
import { MyComponent } from './my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // LoggerService // Providing at module level (alternative to providedIn: 'root')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
