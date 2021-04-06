import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorhandeler',
  templateUrl: './errorhandeler.component.html',
  styleUrls: ['./errorhandeler.component.css']
})
export class ErrorhandelerComponent implements OnInit {

  constructor() { }
  products = undefined;
  ngOnInit(): void {
  }
  getError() {
    this.products.sort();
  }
}
