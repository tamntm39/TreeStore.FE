import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PromotionRequest } from 'src/app/api/models';
import { PromotionService } from "src/app/api/services";
import Swal from "sweetalert2";

@Component({
    selector: 'app-promotion-add',
    templateUrl: './promotion-add.component.html',
    styleUrls: ['./promotion-add.component.scss']
})
export class PromotionAddComponent implements OnInit {
    addPromotionForm: FormGroup;

    constructor(
        private router: Router,
        private promotionService: PromotionService,
        private fb: FormBuilder
    ) {
        this.addPromotionForm = this.fb.group({
            programName: [''],
            promotionId: [''],
            description: [''],
            creationDate: [''],
            startDate: [''],
            endDate: [''],
            discountAmount: [''],
            minimumPurchaseAmount: [''],
            usageLimit: [''],
            isActive: true  // Giả sử mặc định là true
        });
    }

    ngOnInit(): void {
        // Nếu cần khởi tạo dữ liệu cho form, bạn có thể thực hiện ở đây
    }

    onSubmit() {
        if (this.addPromotionForm.valid) {
            const updatedPromotion: PromotionRequest = {
                promotionCode: this.addPromotionForm.get('promotionCode')?.value || null,
                programName: this.addPromotionForm.get('programName')?.value || null,
                description: this.addPromotionForm.get('description')?.value || null,
                creationDate: this.addPromotionForm.get('creationDate')?.value || null, // Định dạng ngày tháng
                startDate: this.addPromotionForm.get('startDate')?.value || null,
                endDate: this.addPromotionForm.get('endDate')?.value || null ,
                discountAmount: this.addPromotionForm.get('discountAmount')?.value || null,
                minimumPurchaseAmount: this.addPromotionForm.get('minimumPurchaseAmount')?.value || null,
                usageLimit: this.addPromotionForm.get('usageLimit')?.value || null,
                isActive: this.addPromotionForm.get('isActive')?.value || null
            };

            console.log("Dữ liệu gửi đi:", updatedPromotion);

            // Gọi API cập nhật khuyến mãi
            this.promotionService.apiPromotionCreatePost$Json$Response({
                body: updatedPromotion // Truyền đối tượng PromotionRequest
            }).subscribe({
                next: (rs) => {
                    if (rs.body.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thêm khuyến mãi thành công',
                            text: rs.body.message,
                            confirmButtonText: 'OK'
                        }).then(() => {
                            this.router.navigate(['/manages/promotion/promotion-list']);
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Thêm khuyến mãi thất bại',
                            text: rs.body.message,
                            confirmButtonText: 'OK'
                        });
                    }
                },
                error: (error) => {
                    console.error('Có lỗi xảy ra:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Có lỗi xảy ra',
                        text: 'Không thể thêm khuyến mãi, vui lòng kiểm tra lại dữ liệu.',
                        confirmButtonText: 'OK'
                    });
                }
            });
        } else {
            console.log('Form không hợp lệ');
            Swal.fire({
                icon: 'warning',
                title: 'Dữ liệu không hợp lệ',
                text: 'Vui lòng kiểm tra các trường thông tin.',
                confirmButtonText: 'OK'
            });
        }
    }

    // Hàm định dạng ngày tháng
    
}
