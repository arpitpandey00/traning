import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPurchase } from '../purchase/IPurchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private DataService: DataService) { }
  purchase : IPurchase[]=[];
  ngOnInit(): void {
    this.purchase=this.DataService.getPurchase();
  }
  // flag = false;
  // DisplayProducts():void{
  //   this.flag=true;
  // }
  

  
  

}
