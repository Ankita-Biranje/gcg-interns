import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-item-list',
  template: `
    <h2>Items</h2>
    <ul>
      <li *ngFor="let item of items">{{ item.name }}</li>
    </ul>
  `,
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
