import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'order-list', component: OrderListComponent }
];

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class OrderModule {}
