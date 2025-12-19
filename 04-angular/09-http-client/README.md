# Angular HttpClient & Interceptors

Angular's `HttpClient` is the standard way to communicate with backend APIs.

## 1. Setup (`provideHttpClient`)

In modern Angular, we **do not** import `HttpClientModule`. Instead, we provide it in `app.config.ts`.

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]) // Register interceptors here
    )
  ]
};
```

## 2. Making Requests

Inject `HttpClient` using `inject()`.

```typescript
// data.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // RxJS is still used for HTTP

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.example.com/posts';

  getPosts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPost(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
```

## 3. Handling Responses in Components

You can use `AsyncPipe` (`| async`) or Signals to handle data.

### Using Signals (Modern Pattern)

```typescript
import { Component, inject, signal, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  template: `
    @if (loading()) {
      <p>Loading...</p>
    }

    <ul>
      @for (post of posts(); track post.id) {
        <li>{{ post.title }}</li>
      }
    </ul>
  `
})
export class PostsComponent implements OnInit {
  private dataService = inject(DataService);

  posts = signal<any[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }
}
```

## 4. Functional Interceptors

Class-based interceptors are deprecated. Use functional interceptors.

```typescript
// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(cloned);
  }

  return next(req);
};
```
