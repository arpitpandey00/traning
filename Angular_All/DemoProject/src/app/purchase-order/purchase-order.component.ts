import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPurchase } from '../purchase/IPurchase';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit,OnChanges{

  constructor() { }
 @Input()  purchaseItem: IPurchase;
 price=0;
 quantity:number;
  ngOnInit(): void {
    
  }
  ngOnChanges():void{
    console.log(this.purchaseItem);
    this.purchaseItem.PItems.forEach(i=>{
      this.quantity=i.Quantity;
      this.price=(this.price*this.quantity)+i.Price;
    })
  }
}
