import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReViewListComponent } from './review-list/review-list.component';
import { FormsModule } from '@angular/forms';

// Định nghĩa routes cho module
const routes: Routes = [
  {
    path: 'review-list',  // Đường dẫn cho danh sách đánh giá
    component: ReViewListComponent // Component sẽ được hiển thị khi truy cập đường dẫn này
  },
];

@NgModule({
  declarations: [
    ReViewListComponent // Khai báo component tại đây
  ],
  imports: [
    CommonModule, // Module chung của Angular
    RouterModule.forChild(routes), // Nhập khẩu RouterModule với các routes đã định nghĩa
    FormsModule // Nhập khẩu FormsModule để sử dụng các tính năng như ngModel
  ]
})
export class ReviewModule {}
