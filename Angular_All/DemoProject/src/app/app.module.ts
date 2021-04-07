import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtDemoComponent } from './tshirt-demo/tshirt-demo.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion'
import { DataService } from './data.service';
import { MyErrorHandelerService } from './my-error-handeler.service';
import { AppRoutingModule } from './app-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {MatTableModule} from '@angular/material/table';
import { ChangeColorDirective } from './change-color.directive';
import { HomeComponent } from './home/home.component';
import { Sharedchild1child2Component } from './sharedchild1child2/sharedchild1child2.component';
import { ErrorhandelerComponent } from './errorhandeler/errorhandeler.component';
import { FormComponent } from './form/form.component';
import { ProductSearchPipe } from './product-search.pipe';
import { PriceSearchPipe } from './price-search.pipe';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ReplayComponent } from './replay/replay.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';



@NgModule({
  declarations: [
    AppComponent,
    TshirtDemoComponent,
    HelloComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Child1Component,
    Child2Component,
    ChangeColorDirective,
    HomeComponent,
    Sharedchild1child2Component,
    ErrorhandelerComponent,
    FormComponent,
    ProductSearchPipe,
    PriceSearchPipe,
    RxjsComponent,
    ReplayComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule,
    MatTableModule    
  ],
  providers: [DataService,{provide:ErrorHandler,useClass:MyErrorHandelerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
