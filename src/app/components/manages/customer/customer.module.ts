import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';


const routes: Routes = [
  {
    path: 'customer-list',
    component: CustomerListComponent
  },
  {
    path: 'customer-edit',
    component: CustomerEditComponent
  }
];

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
