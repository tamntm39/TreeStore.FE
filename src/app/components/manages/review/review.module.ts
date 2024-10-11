import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewListComponent } from './review-list/review-list.component';

const routes: Routes = [
  { path: 'review-list', component: ReviewListComponent } // Đảm bảo rằng path này đúng
];

@NgModule({
  declarations: [
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Khai báo routing
  ]
})
export class ReviewModule { }
