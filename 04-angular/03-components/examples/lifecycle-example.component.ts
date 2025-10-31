import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  template: `
    <h2>Lifecycle Example</h2>
    <p>Check the console for lifecycle hook messages.</p>
  `,
  styles: [`
    h2 { color: blue; }
  `]
})
export class LifecycleExampleComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
