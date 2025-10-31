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
