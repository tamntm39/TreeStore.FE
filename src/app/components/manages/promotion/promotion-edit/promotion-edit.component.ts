import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionRequest, PromotionResponse } from 'src/app/api/models';
import { PromotionService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.scss']
})
export class PromotionEditComponent implements OnInit {
  promotionId:string 
  promotionDB: PromotionResponse ;
  editPromotionForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private promotionService: PromotionService,
    private fb: FormBuilder
  ) {
    // Khởi tạo form
    this.editPromotionForm = this.fb.group({

     
      promotionId:[''],
      programName: [''],
      description: [''],
      creationDate: [''],
      startDate: [''],
      endDate: [''],
      discountAmount: [''],
      minimumPurchaseAmount: [''],
      usageLimit: [''],
      isActive: [true]
    });

  }


 ngOnInit() {
  
  this.promotionId = this.route.snapshot.paramMap.get('promotionId') || '';
  console.log( this.promotionId); // Log promotionId mỗi khi component khởi tạo
  
  if (this.promotionId) {
    this.promotionService.apiPromotionGetPromotionByIdPromotionIdGet$Json$Response({ promotionId: this.promotionId }).subscribe((rs) => {
      console.log('Response:', rs);
      if (rs.body.success) {
        this.promotionDB = rs.body.data;
        console.log('Promotion Data:', this.promotionDB);
        
        // Cập nhật giá trị form
        this.editPromotionForm.patchValue({
          promotionId: this.promotionDB.promotionId,
          programName: this.promotionDB.programName,
          description: this.promotionDB.description,
          creationDate: new Date(this.promotionDB.creationDate), // Chuyển đổi sang Date
          startDate: new Date(this.promotionDB.startDate), // Chuyển đổi sang Date
          endDate: new Date(this.promotionDB.endDate), // Chuyển đổi sang Date
          discountAmount: this.promotionDB.discountAmount,
          minimumPurchaseAmount: this.promotionDB.minimumPurchaseAmount,
          usageLimit: this.promotionDB.usageLimit,
          isActive: this.promotionDB.isActive
        });
        
      } else {
        console.log('Lấy dữ liệu khuyến mãi thất bại:', rs.body.message);
      }
    });
  }
}

  
  

  
  cancel() {
    this.router.navigate(['/manages/promotion/promotion-list']); // Quay lại danh sách khuyến mãi
  }

  onSubmit() {
    console.log("Cập nhật khuyến mãi"); 
  
    if (this.editPromotionForm.valid) {
      const updatedPromotion: PromotionRequest = {
        promotionId: this.editPromotionForm.get('promotionId')?.value || '',  // Đảm bảo `promotionId` là string
        programName: this.editPromotionForm.get('programName')?.value || null,
        description: this.editPromotionForm.get('description')?.value || null,
        creationDate: this.editPromotionForm.get('creationDate')?.value || null ,
        startDate: this.editPromotionForm.get('startDate')?.value || null ,
        endDate: this.editPromotionForm.get('endDate')?.value || null ,
        discountAmount: this.editPromotionForm.get('discountAmount')?.value || null,
        minimumPurchaseAmount: this.editPromotionForm.get('minimumPurchaseAmount')?.value || null,
        usageLimit: this.editPromotionForm.get('usageLimit')?.value || null,
        isActive: this.editPromotionForm.get('isActive')?.value || true
      };
  
      // Gọi API cập nhật khuyến mãi
      this.promotionService.apiPromotionUpdatePromotionPut$Json$Response({
        body: updatedPromotion
      }).subscribe({
        next: (rs) => {
          if (rs.body.success) {
            Swal.fire({
              icon: 'success',
              title: 'Cập nhật thành công',
              text: 'Thông tin khuyến mãi đã được cập nhật thành công!',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/manages/promotion/promotion-list']);
            });
          } else {
            console.log('Cập nhật thất bại:', rs.body.message);
            Swal.fire({
              icon: 'error',
              title: 'Cập nhật thất bại',
              text: rs.body.message,
              confirmButtonText: 'OK'
            });
          }
        },
        error: (error) => {
          console.error('Có lỗi xảy ra:', error);
          if (error.error && error.error.message) {
            console.error('Chi tiết lỗi:', error.error.message);
          }
        }
      });
    } else {
      console.log('Form không hợp lệ');
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Vui lòng kiểm tra lại thông tin đã nhập.',
        confirmButtonText: 'OK'
      });
    }
  }
  
  
}
