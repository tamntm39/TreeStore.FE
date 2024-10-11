import { Component, OnInit } from '@angular/core';

interface Review {
  customerName: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[] = [
    { customerName: 'Nguyễn Văn A', rating: 5, comment: 'Sản phẩm tuyệt vời!' },
    { customerName: 'Trần Thị B', rating: 4, comment: 'Dịch vụ tốt, sẽ quay lại!' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Logic khởi tạo nếu cần
  }

  deleteReview(reviewToDelete: Review): void {
    this.reviews = this.reviews.filter(review => review !== reviewToDelete);
  }
}
