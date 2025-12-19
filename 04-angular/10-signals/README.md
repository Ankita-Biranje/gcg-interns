# Angular Signals

Signals are a reactive primitive introduced in Angular 16. They provide a new way to manage state in your application, offering fine-grained reactivity and better performance than `Zone.js` based change detection.

A "Signal" is a wrapper around a value that can notify interested consumers when that value changes.

## 1. Writable Signals (`signal`)

Create a signal with an initial value.

```typescript
import { signal } from '@angular/core';

// Create
const count = signal(0);

// Read (invoke as a function)
console.log('The count is: ' + count()); // 0

// Set specific value
count.set(5);

// Update based on previous value
count.update(value => value + 1);
```

## 2. Computed Signals (`computed`)

Computed signals derive their value from other signals. They are:
- **Lazy**: Only calculated when read.
- **Memoized**: only recalculated if dependencies change.

```typescript
import { computed } from '@angular/core';

const doubleCount = computed(() => count() * 2);

console.log(doubleCount()); // 12 (if count is 6)
```

## 3. Effects (`effect`)

Effects are operations that run whenever one or more signal dependencies change. Use them for side effects (logging, manual DOM manipulation, syncing with local storage).

```typescript
import { effect } from '@angular/core';

constructor() {
  effect(() => {
    console.log(`The current count is ${count()}`);
    // This runs initially, and then whenever 'count' changes.
  });
}
```

## 4. Signal Inputs and Models

As covered in the Data Binding section, modern inputs should be signals.

```typescript
// Signal Input (Read-only from child)
name = input<string>('Default Name');

// Model Input (Two-way binding)
// Allows parent to bind [(checked)]="isAdmin"
checked = model(false);

toggle() {
  this.checked.update(c => !c); // This propagates to parent!
}
```
