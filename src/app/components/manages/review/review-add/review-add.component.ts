import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ReviewRequest } from 'src/app/api/models';
import { ReviewService } from "src/app/api/services";
import Swal from "sweetalert2";



@Component({
    selector:'app-review-add',
    templateUrl: './review-add.component.html',
    styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit 
{
    
    editReviewForm :FormGroup ;

constructor(
private router:Router , 
private reviewService:ReviewService,
private fb:FormBuilder

)
{
    this.editReviewForm=this.fb.group({
        customerid:[''],
        productid:[''],
        comment:['']

    })
}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    onSubmit() {
        if (this.editReviewForm.valid) {
            const newReview: ReviewRequest = {
                customerId: this.editReviewForm.get('customerid')?.value || null,
                productId: this.editReviewForm.get('productid')?.value || null,
                comment: this.editReviewForm.get('comment')?.value || null,
            };
    
            this.reviewService.apiReviewCreateReviewPost$Json$Response({ body: newReview }).subscribe({
                next: (rs) => {
                    if (rs.body.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thêm mới bình luận thành công',
                            text: rs.body.message,
                            confirmButtonText: 'OK'
                        }).then(() => {
                            this.router.navigate(['/manages/review/review-list']);
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Thêm mới bình luận thất bại',
                            text: rs.body.message,
                            confirmButtonText: 'OK'
                        });
                    }
                },
                error: (error) => {
                    console.error('Có lỗi xảy ra:', error);
                }
            });
        } else {
            console.log('Form không hợp lệ');
        }
    }
    
}


   
