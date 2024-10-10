import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReViewListComponent implements OnInit {
  reviews = [
    // Dữ liệu giả định cho các đánh giá
    { customerName: 'Nguyễn Văn A', rating: 5, comment: 'Sản phẩm tuyệt vời!' },
    { customerName: 'Trần Thị B', rating: 4, comment: 'Dịch vụ tốt, sẽ quay lại!' },
    // Thêm các đánh giá khác ở đây
  ];

  constructor() {}

  ngOnInit(): void {
    // Logic khởi tạo nếu cần
  }

  deleteReview(reviewToDelete: any): void {
    this.reviews = this.reviews.filter(review => review !== reviewToDelete);
  }
}
