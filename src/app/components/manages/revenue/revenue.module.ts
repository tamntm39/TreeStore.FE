import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RevenueComponent } from './revenue.component';


const routes: Routes = [
  { path: '', component: RevenueComponent }
];

@NgModule({
  declarations: [
    RevenueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RevenueModule { }
