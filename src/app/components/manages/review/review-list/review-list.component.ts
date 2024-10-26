import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/api/services'; // Cập nhật đường dẫn cho service
import { Review, ReviewResponse } from 'src/app/api/models'; // Cập nhật đường dẫn cho model
import { Router } from '@angular/router';
import { BooleanResultCustomModel } from 'src/app/api/models/boolean-result-custom-model'; // Cập nhật đường dẫn cho phù hợp

import Swal from 'sweetalert2'; // Để hiển thị thông báo
import { StrictHttpResponse } from 'src/app/api/strict-http-response';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  listReviewDB: Array<Review> = []; 
  reviews: Review[] =[];
  constructor(
    private reviewService: ReviewService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.loadReviews(); // Gọi hàm để tải danh sách review khi component khởi tạo
  }

  loadReviews(): void {
    this.reviewService.apiReviewListReviewGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.listReviewDB = response.data;
        console.log('Danh sách review:', this.listReviewDB); // In ra danh sách review
      } else {
        console.log('Lấy danh sách review thất bại!');
      }
    });
  }
  



  deleteReview(reviewId: number): void {
    // Kiểm tra reviewId có hợp lệ không
    if (reviewId === undefined || reviewId === null) {
      console.error('reviewId không hợp lệ:', reviewId);
      Swal.fire('Lỗi!', 'ID đánh giá không hợp lệ.', 'error');
      return; // Thoát khỏi phương thức nếu reviewId không hợp lệ
    }
  
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa review này?',
      text: "Hành động này không thể hoàn tác!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reviewService.apiReviewDeleteReviewGetIdDelete$Json$Response({ 
          reviewId, 
          GetId: reviewId.toString() // Gọi toString() chỉ khi chắc chắn reviewId có giá trị
        })
        .subscribe({
          next: (response: StrictHttpResponse<BooleanResultCustomModel>) => {
            const responseBody = response.body;
  
            console.log(responseBody); // In ra toàn bộ phản hồi
  
            // Kiểm tra thuộc tính 'success' trong responseBody
            if (responseBody && responseBody.success) {
              Swal.fire('Đã xóa!', 'Review đã được xóa thành công.', 'success');
              this.loadReviews(); // Tải lại danh sách review
            } else {
              Swal.fire('Lỗi!', responseBody.message || 'Xóa review không thành công.', 'error');
            }
          },
          error: (error) => {
            console.error('Lỗi khi xóa review:', error); // In lỗi nếu có
            Swal.fire('Lỗi!', 'Có lỗi xảy ra khi xóa review.', 'error');
          }
        });
      }
    });
  }
  
  
  navigateToAddReview() {
    console.log('Navigating to Add User');
    this.router.navigate(['/manages/review/review-add']);
  }

  }
  
  

