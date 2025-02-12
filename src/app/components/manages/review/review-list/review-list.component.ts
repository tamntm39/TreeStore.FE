import { Component, OnInit } from '@angular/core';
import { ReviewService, CustomerService } from 'src/app/api/services'; // Ensure services are correctly imported
import { Review } from 'src/app/api/models'; // Ensure model is correctly imported
import { Router } from '@angular/router';
import { BooleanResultCustomModel } from 'src/app/api/models/boolean-result-custom-model'; // Ensure this model is included
import { StrictHttpResponse } from 'src/app/api/strict-http-response'; // For strict HTTP response types
import Swal from 'sweetalert2'; // Sweetalert2 for popup messages

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  listReviewDB: Review[] = []; // Store reviews data
  constructor(
    private reviewService: ReviewService,
    private customerService: CustomerService, // Added CustomerService to fetch customer info
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReviews(); // Load reviews on component initialization
  }

  loadReviews(): void {
    // Fetch reviews from the service
    this.reviewService.apiReviewListReviewGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.listReviewDB = response.data;

        // Loop through reviews to fetch customer data
        this.listReviewDB.forEach((review) => {
          if (review.customerId) {
            this.customerService.apiCustomerGetCustomerByIdGet$Json$Response({ customerId: review.customerId }).subscribe(
              (customerResponse) => {
                if (customerResponse.body.success) {
                  review.customer = customerResponse.body.data?.fullname ?? 'Người dùng ẩn danh'; // Add customer info to review
                } else {
                  review.customer = 'Người dùng ẩn danh'; // Default if customer not found
                }
              },
              (error) => {
                console.error('Error fetching customer info:', error);
                review.customer = 'Người dùng ẩn danh'; // Default value if error occurs
              }
            );
          }
        });

        console.log('Reviews with customer info:', this.listReviewDB);
      } else {
        console.error('Failed to load reviews!');
      }
    }, (error) => {
      console.error('Error loading reviews:', error);
    });
  }

  deleteReview(reviewId: number): void {
    // Check if the reviewId is valid
    if (!reviewId || reviewId <= 0) {
      console.error('Invalid reviewId:', reviewId);
      Swal.fire('Error!', 'Invalid review ID.', 'error');
      return; // Exit method if reviewId is not valid
    }

    Swal.fire({
      title: 'Are you sure you want to delete this review?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reviewService.apiReviewDeleteReviewGetIdDelete$Json$Response({
          reviewId,
          GetId: reviewId.toString() // Ensure correct parameter passing
        })
        .subscribe({
          next: (response: StrictHttpResponse<BooleanResultCustomModel>) => {
            const responseBody = response.body;
            if (responseBody && responseBody.success) {
              Swal.fire('Deleted!', 'Review has been successfully deleted.', 'success');
              this.loadReviews(); // Reload reviews after deletion
            } else {
              Swal.fire('Error!', responseBody.message || 'Failed to delete review.', 'error');
            }
          },
          error: (error) => {
            console.error('Error deleting review:', error);
            Swal.fire('Error!', 'An error occurred while deleting the review.', 'error');
          }
        });
      }
    });
  }

  navigateToAddReview() {
    console.log('Navigating to Add Review');
    this.router.navigate(['/manages/review/review-add']); // Navigate to add review page
  }
}
