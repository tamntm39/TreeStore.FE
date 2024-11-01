import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PipesModule } from 'src/app/common/pipes/pipes.module';


const routes: Routes = [
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent }
];

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PipesModule]
})
export class OrderModule {}
