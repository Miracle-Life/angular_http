import { Component, OnInit } from '@angular/core';
import {DataServisService} from './data-servis.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  itemsSource: string[];
  constructor(private svc: DataServisService) {
   this.itemsSource = svc.getData();
  }
  ngOnInit() {
  }

}
