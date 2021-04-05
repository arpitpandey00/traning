import { Component, OnInit, Output } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private DataService:DataService) { }

  ngOnInit(): void {
    
  }
  data: number
  setprice():void{
    this.DataService.setPrice(this.data);
  }
  


}
