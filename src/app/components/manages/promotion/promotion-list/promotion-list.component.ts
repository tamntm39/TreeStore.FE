import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActiveRequestPromotion, Promotion, PromotionRequest, PromotionResponse } from 'src/app/api/models';
import { PromotionService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss'] // sửa 'styleUrl' thành 'styleUrls'
})
export class PromotionListComponent implements OnInit { // Implement OnInit để sử dụng ngOnInit
  listPromotionDB: Promotion[] = []; // Định nghĩa đúng kiểu dữ liệu
  promotion: Promotion[] = [];

  constructor(
    private promotionService: PromotionService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.loadPromotion();
  }

  loadPromotion(): void {
    // Gọi phương thức apiPromotionListPromotionGet$Json$Response() và lưu trữ Observable
    this.promotionService.apiPromotionListPromotionGet$Json$Response().subscribe((rs) => {
      const response = rs.body; // Lấy dữ liệu từ body của response
  
      // Kiểm tra xem response.success có đúng không
      if (response.success) {
        // Kiểm tra xem response.data có phải là một mảng không
        if (Array.isArray(response.data)) {
          this.listPromotionDB = response.data as Promotion[]; // Chuyển đổi kiểu dữ liệu
          console.log('Danh sách khuyến mãi:', this.listPromotionDB);
        } else {
          console.error('Dữ liệu không phải là một mảng khuyến mãi! Dữ liệu nhận được:', response.data);
        }
      } else {
        console.log('Lấy danh sách khuyến mãi thất bại !');
      }
    }, (error) => {
      // Xử lý lỗi nếu có
      console.error('Có lỗi xảy ra khi lấy danh sách khuyến mãi:', error);
    });
  }
  
  


 
  navigateToAddPromotion() {
    console.log('Navigating to Add Promotion');
    this.router.navigate(['/manages/promotion/promotion-add']);
  }

  navigateToEditPromotion(promotionCode: string) {
    this.router.navigate(['/manages/promotion/promotion-edit', promotionCode]);
  }


  togglePromotionActiveStatus(promotion: PromotionResponse) {
    const newStatus = !promotion.isActive; // Lưu trạng thái mới
    Swal.fire({
        title: 'Bạn chắc chứ?',
        text: `Bạn có muốn chuyển trạng thái khuyến mãi này thành ${newStatus ? 'kích hoạt' : 'vô hiệu hóa'}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Thực hiện!',
        cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
        if (result.isConfirmed) {
            // Gửi yêu cầu để thay đổi trạng thái khuyến mãi
            this.promotionService.apiPromotionChangeActivePost$Json$Response({
               promotionCode :promotion.promotionCode
            }).subscribe((rs) => {
                const response = rs.body;
                if (response.success) {
                    promotion.isActive = !promotion.isActive; // Cập nhật trạng thái mới

                    Swal.fire(
                        'Cập nhật!',
                        `Đã cập nhật thành công trạng thái khuyến mãi ${promotion.isActive ? 'kích hoạt' : 'vô hiệu hóa'}.`,
                        'success'
                    );
                } else {
                    Swal.fire('Cập nhật thất bại!', response.message, 'error');
                }
            }, (error) => {
                console.error('Lỗi khi cập nhật trạng thái:', error);
                const errorMessage = error.error?.message || 'Có lỗi xảy ra khi cập nhật trạng thái.';
                Swal.fire('Lỗi!', errorMessage, 'error');
            });
        }
    });
}







}
