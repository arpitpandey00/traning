import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Choose t-shirt';
  a=200;
  b=200;
  imgSource ='../assets/front.jpg';
  changeTshirtMouseEnter():void{
    this.imgSource ='../assets/front.jpg';
  }
  changeTshirtMouseExit():void{
    this.imgSource ='../assets/back.jpg';
  }
  SetWidth():void
  {
    this.a=100;
    this.b=50;
  }
}
