import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProducts } from '../product/IProducts';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private DataService:DataService) { }
p:IProducts;

  ngOnInit(): void {
    this.DataService.product$.subscribe(c=>{this.p=c;})
  }

}
