import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProducts } from './IProducts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private DataService:DataService) { }

  products: IProducts[]=[];

  ngOnInit(): void {
    this.products = this.DataService.getDataFromDB();
    console.log(this.products);
  }
  displayedColumns: string[] = ['ID', 'TITLE', 'Price',  'ExpiryDate',  'Quantity' ];
  input:string;
  price:number;
  
}
