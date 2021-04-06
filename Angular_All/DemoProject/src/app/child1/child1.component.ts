import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { DataService } from '../data.service';
import { IProducts } from '../product/IProducts';
function PriceRangeValidator(minprice: number, maxprice: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value > maxprice || control.value <minprice)) {
      return { "priceerror": true };
    }
    return null;

  }

}
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private DataService:DataService) { }
  productEditForm: FormGroup;
  
  data: number;
  product:IProducts;
  minprice:number=0;
  maxprice:number=1000000;
  setprice():void{
    this.DataService.setPrice(this.data);
  }
  
  updateproduct(){
    console.log(this.productEditForm.value);
    this.DataService.updateproducts(this.productEditForm.value);
  }
  
  ngOnInit(): void {

    this.DataService.product$.subscribe((item)=>this.product=item);

    this.productEditForm = new FormGroup({
      Id: new FormControl(this.product.Id, [Validators.required]),
      Title: new FormControl(this.product.Title, [Validators.required]),
      Price: new FormControl(this.product.Price, [Validators.required,PriceRangeValidator(this.minprice, this.maxprice)]),
      Quantity: new FormControl(this.product.Quantity, [Validators.required]),
      ExpiryDate: new FormControl(this.product.ExpiryDate, [Validators.required]),
      IsAvaliable: new FormControl(this.product.IsAvaliable, [Validators.required]),
     })
  }
  reset():void{
    this.productEditForm.reset();
  }
 
  }
