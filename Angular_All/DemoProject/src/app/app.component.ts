import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "Angular Demo";
  showDataBindindDemo=true;
  showProductDB =false;

  showDBDemo():void{
    this.showDataBindindDemo=true;
    this.showProductDB =false;
  }
  showProducts():void{
    this.showDataBindindDemo=false;
    this.showProductDB =true;
  }
 
}
