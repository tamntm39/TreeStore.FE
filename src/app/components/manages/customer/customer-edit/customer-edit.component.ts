import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCustomerRequest } from 'src/app/api/models'; // Chắc chắn bạn có mô hình này
import { Customer } from 'src/app/api/models/customer'; // Cập nhật đường dẫn
import { CustomerService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customerId: number;
  customerDB: Customer | undefined; // Chỉ cần lưu Customer ở đây
  editCustomerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    // Khởi tạo form với các trường cần thiết
    this.editCustomerForm = this.fb.group({
      fullname: [''],
      email: [''],
      phone: [''],
      address: ['']
    });
  }

  ngOnInit() {
    // Lấy ID khách hàng từ route
    this.customerId = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.customerId);

    // Gọi API để lấy thông tin khách hàng bằng ID
    this.customerService.apiCustomerGetCustomerByIdGet$Json$Response({ customerId: this.customerId }).subscribe((rs) => {
      if (rs.body.success) {
        const customerData: Customer = rs.body.data; // Lấy dữ liệu khách hàng
        this.editCustomerForm.patchValue({
          fullName: customerData.fullName,
          email: customerData.email,
          phone: customerData.phone,
          address: customerData.address
        });
      } else {
        console.log('Lấy dữ liệu khách hàng thất bại');
      }
    });
  }

  cancel() {
    this.router.navigate(['/manages/customer/customer-list']); // Quay lại danh sách khách hàng khi nhấn hủy
  }

  onSubmit() {
    if (this.editCustomerForm.valid) {
      const updatedCustomer: UpdateCustomerRequest = {
        customerId: this.customerId,
        fullname: this.editCustomerForm.get('fullname')?.value || null,
        email: this.editCustomerForm.get('email')?.value || null,
        phone: this.editCustomerForm.get('phone')?.value || null,
        address: this.editCustomerForm.get('address')?.value || null
      };

      // Gọi API cập nhật khách hàng
      this.customerService.apiCustomerUpdateCustomerPut$Json$Response({ body: updatedCustomer }).subscribe({
        next: (rs) => {
          if (rs.body.success) {
            Swal.fire({
              icon: 'success',
              title: 'Cập nhật thành công',
              text: 'Thông tin khách hàng đã được cập nhật thành công!',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/manages/customer/customer-list']);
            });
          } else {
            console.log('Cập nhật thất bại:', rs.body.message);
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