
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { Child1Component } from './child1/child1.component';
import { ErrorhandelerComponent } from './errorhandeler/errorhandeler.component';
import { FormComponent } from './form/form.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReplayComponent } from './replay/replay.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Sharedchild1child2Component } from './sharedchild1child2/sharedchild1child2.component';
import { SubjectComponent } from './subject/subject.component';
import { TshirtDemoComponent } from './tshirt-demo/tshirt-demo.component';

    const routes: Routes = [
        {
            path: 'tshirtDemo',
            component: TshirtDemoComponent,
        },{
            path: 'Directive',
            component: HelloComponent,
        },{
            path: 'purchase',
            component: PurchaseComponent,
        },{
            path: 'product',
            component: ProductComponent,
        },{
            path: 'shared',
            component: Sharedchild1child2Component,
        },
        {
            path: 'errorhandel',
            component: ErrorhandelerComponent,
        },
        {
            path: 'RxJsSubject',
            component: RxjsComponent,
                    children: [
                    {
                      path: 'subjectdefault', 
                      component: SubjectComponent,
                    },
                    {
                      path: 'subjectbehaviour',
                      component: BehaviourSubjectComponent, 
                    },
                    {
                        path: 'subjectasync',
                        component: AsyncSubjectComponent, 
                      },
                      {
                        path: 'subjectreplay',
                        component: ReplayComponent, 
                      }
                  ],
        },
        {
            path: 'LoginForm',
            component: FormComponent,
        },
        {
            path: 'home',
            component: HomeComponent,
        },
        {
            path:'',redirectTo:"home",pathMatch:'full'
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
