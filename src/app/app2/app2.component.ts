import { Component, OnInit } from '@angular/core';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  private counter = 0;
  constructor(public svc: CounterService) {

  }
  plus() {
    this.svc.increment();
    this.counter = this.svc.getValue();
  }
  minus() {
    this.svc.decrement();
    this.counter = this.svc.getValue();
  }
  ngOnInit() {
  }

}
