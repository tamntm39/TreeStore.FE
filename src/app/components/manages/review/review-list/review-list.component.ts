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
      console.log(rs); // In ra phản hồi từ API
      const response = rs.body;
      if (response.success) {
        this.listReviewDB = response.data;
      } else {
        console.log('Lấy danh sách review thất bại!');
      }
    });
  }



  deleteReview(reviewId: number): void {
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
        this.reviewService.apiReviewDeleteReviewGetIdDelete$Json$Response({ reviewId, GetId: reviewId.toString() })
          .subscribe((response: StrictHttpResponse<BooleanResultCustomModel>) => {
            // Đối với StrictHttpResponse, bạn cần truy cập body
            const responseBody = response.body;
  
            console.log(responseBody); // In ra toàn bộ phản hồi
  
            // Kiểm tra thuộc tính 'result' trong responseBody
            if (responseBody && responseBody.success) { // Kiểm tra nếu result là true
              Swal.fire(
                'Đã xóa!',
                'Review đã được xóa thành công.',
                'success'
              );
              this.loadReviews(); // Tải lại danh sách review
            } else {
              Swal.fire(
                'Lỗi!',
                responseBody.message || 'Xóa review không thành công.', // Hiển thị thông điệp từ phản hồi nếu có
                'error'
              );
            }
          }, (error) => {
            console.error(error); // In lỗi nếu có
            Swal.fire(
              'Lỗi!',
              'Có lỗi xảy ra khi xóa review.',
              'error'
            );
          });
      }
    });
  }
  

  }
  
  

