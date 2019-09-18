import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServisService {
  getData() {
    let items:string[] = [];
    for (let i = 0; i < 10; i++) {
      items[i] = "Item " + i;
    }
    return items;
  }
  constructor() { }
}
