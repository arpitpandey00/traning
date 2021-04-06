import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private DataService:DataService) { }
  productEditForm: FormGroup;
  
  data: number;
  setprice():void{
    this.DataService.setPrice(this.data);
  }
  
  updateproduct(){
    this.DataService.updateproducts(this.productEditForm.value);
  }
  
  ngOnInit(): void {
    this.productEditForm = new FormGroup({
      Id: new FormControl(null, [Validators.required]),
      Title: new FormControl(null, [Validators.required]),
      Price: new FormControl(null, [Validators.required]),
      Quantity: new FormControl(null, [Validators.required]),
      ExpiryDate: new FormControl(null, [Validators.required]),
      instock: new FormControl(null, [Validators.required]),
     })
  }
  reset():void{
    this.productEditForm.reset();
  }
  }
