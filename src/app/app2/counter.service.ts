import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;

  increment() {
    this.counter += 5;
    console.log(this.counter);
  }

  decrement() {
    this.counter -= 10;
    console.log(this.counter);
  }

  getValue() {
    return this.counter;
  }
  constructor() { }
}
