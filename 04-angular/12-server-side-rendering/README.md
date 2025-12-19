# Server-Side Rendering (SSR) & Hydration

Angular 17+ has significantly improved support for SSR and Hydration, making it easier to build performant, SEO-friendly applications.

## 1. What is SSR?

Server-Side Rendering means generating the HTML of your application on the server (using Node.js) and sending the fully rendered page to the browser.

**Benefits:**
- **Performance**: Users see the content faster (First Contentful Paint).
- **SEO**: Search engines can easily crawl your content.
- **Social Sharing**: Link previews work correctly.

## 2. Enabling SSR

In a new project:
`ng new my-app --ssr`

In an existing project:
`ng add @angular/ssr`

This sets up the server builder and configuration files.

## 3. Hydration

Hydration is the process of "waking up" the static HTML sent by the server.

Traditionally, Angular would destroy the server-rendered DOM and re-create it on the client (Destructive Hydration), which caused a flicker.

**Non-Destructive Hydration:**
Angular reuse the existing DOM nodes and attaches event listeners to them. This is much faster and prevents flickering.

### Enabling Hydration

It is typically enabled by default in new SSR projects via `provideClientHydration()` in `app.config.ts`.

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration()
  ]
};
```

## 4. Best Practices for SSR

1.  **Avoid direct DOM access**: Do not use `document`, `window`, or `localStorage` in your component's constructor or `ngOnInit`. The server does not have these objects.
    - Check `if (isPlatformBrowser(this.platformId))` if you must use them.
    - Or use `afterNextRender` lifecycle hook.

2.  **Use `inject(PLATFORM_ID)`**: To check if you are running on the server or browser.

```typescript
import { Component, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({ ... })
export class MyComponent {
  platformId = inject(PLATFORM_ID);

  constructor() {
    // Safe for SSR (runs on browser only)
    afterNextRender(() => {
       localStorage.setItem('visited', 'true');
    });
  }

  checkPlatform() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Running in browser');
    }
  }
}
```
