import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Demo";
  showDataBindindDemo = true;
  showProductDB = false;
  showPurchaseRec = false;
  child1=false;
  child2=false;
  hello=false;
  errh=false;
  

  showDBDemo(): void {
    this.showDataBindindDemo = true;
    this.showProductDB = false;
    this.showPurchaseRec = false;
    this.child1=false;
  this.child2=false;
  this.hello=false;
  this.errh=false;
  }
  showProducts(): void {
    this.showDataBindindDemo = false;
    this.showProductDB = true;
    this.showPurchaseRec = false;
    this.child1=false;
  this.child2=false;
  this.hello=false;
  this.errh=false;
  }
  showPurchase(): void {
    this.showDataBindindDemo = false;
    this.showProductDB = false;
    this.showPurchaseRec = true;
    this.child1=false;
  this.child2=false;
  this.hello=false;
  this.errh=false;
  this.errh=false;
  }
  showChild():void{
    this.showDataBindindDemo=false;
    this.child1=true;
    this.child2=true;
    this.showProductDB = false;
    this.showPurchaseRec = false;
    this.hello=false;
    this.errh=false;
  }
  showDirective():void{
    this.hello=true;
    this.showDataBindindDemo = false;
    this.child1=false;
    this.child2=false;
    this.showProductDB = false;
    this.showPurchaseRec = false;
    this.errh=false;
  }
showerror():void{
   this.hello=false;
  this.showDataBindindDemo = false;
  this.child1=false;
  this.child2=false;
  this.showProductDB = false;
  this.showPurchaseRec = false;
  this.errh=true;
  
}
}
