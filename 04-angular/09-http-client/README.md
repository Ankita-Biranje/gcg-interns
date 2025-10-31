# Angular HttpClient

Angular's `HttpClient` module provides a simplified API for making HTTP requests from your application. It's built on top of the `XMLHttpRequest` interface and offers features like typed request and response objects, interceptors, and error handling.

## 1. Setup

To use `HttpClient`, you need to import `HttpClientModule` into your root `AppModule`.

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 2. Making GET Requests

You can inject the `HttpClient` service into your components or services and use its `get()` method to fetch data.

```typescript
// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
}
```

```typescript
// src/app/data-display/data-display.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-data-display',
  template: `
    <h2>Posts</h2>
    <div *ngIf="posts.length > 0">
      <div *ngFor="let post of posts" class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <div *ngIf="!posts.length">
      <p>Loading posts...</p>
    </div>
  `,
  styles: [`
    .post-card {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
  `]
})
export class DataDisplayComponent implements OnInit {
  posts: Post[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
```

## 3. Making POST, PUT, and DELETE Requests

`HttpClient` also provides methods for other HTTP verbs.

### POST Request

```typescript
// src/app/data.service.ts (continued)
createPost(post: Omit<Post, 'id'>): Observable<Post> {
  return this.http.post<Post>(this.apiUrl, post);
}
```

### PUT Request

```typescript
// src/app/data.service.ts (continued)
updatePost(id: number, post: Partial<Post>): Observable<Post> {
  return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
}
```

### DELETE Request

```typescript
// src/app/data.service.ts (continued)
deletePost(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
```

## 4. Error Handling

You should always handle errors when making HTTP requests. The `HttpClient` methods return Observables, so you can use RxJS operators like `catchError`.

```typescript
// src/app/data.service.ts (continued)
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// ... inside DataService
getPosts(): Observable<Post[]> {
  return this.http.get<Post[]>(this.apiUrl).pipe(
    catchError(this.handleError) // Handle errors
  );
}

private handleError(error: any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}
```

## 5. HTTP Interceptors

HTTP Interceptors allow you to intercept incoming or outgoing HTTP requests and responses to transform or handle them. Common use cases include adding authentication tokens, logging, or error handling.

### Creating an Interceptor

```typescript
// src/app/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service
    const authToken = 'YOUR_AUTH_TOKEN'; // Replace with actual token from a service

    // Clone the request and add the authorization header
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });

    // Pass the cloned request to the next handler
    return next.handle(authReq);
  }
}
```

### Providing the Interceptor

You need to provide your interceptor in your `AppModule`.

```typescript
// src/app/app.module.ts (continued)
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  // ...
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true // Important: tells Angular that HTTP_INTERCEPTORS is a token for a multi-provider array
    }
  ],
  // ...
})
export class AppModule { }
```

