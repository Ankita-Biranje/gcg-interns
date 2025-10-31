import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Item {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  getItems(): Observable<Item[]> {
    // Simulate fetching data from an API
    return of(this.items);
  }

  getItemById(id: number): Observable<Item | undefined> {
    return of(this.items.find(item => item.id === id));
  }
}
