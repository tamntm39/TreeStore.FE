import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerResponse, UpdateCustomerRequest } from 'src/app/api/models'; // Đảm bảo đường dẫn đúng
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
  customerDB: CustomerResponse | undefined;
  editCustomerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    // Khởi tạo form
    this.editCustomerForm = this.fb.group({
      fullname: [''],
      email: [''],
      phone: [''],
      address: [''],
      birthday: [''],
      avatar: ['']
    });
  }

  ngOnInit() {
    // Lấy ID khách hàng từ route
    this.customerId = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.customerId);

    // Gọi API để lấy thông tin khách hàng bằng ID
    this.customerService.apiCustomerGetCustomerByIdGet$Json$Response({ customerId: this.customerId }).subscribe((rs) => {
      if (rs.body.success) {
        this.customerDB = rs.body.data;
        // Cập nhật giá trị form với dữ liệu khách hàng
        this.editCustomerForm.patchValue({
          fullname: this.customerDB.fullname,
          email: this.customerDB.email,
          phone: this.customerDB.phone,
          address: this.customerDB.address,

        });
      } else {
        console.log('Lấy dữ liệu khách hàng thất bại:', rs.body.message);
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
        fullname: this.editCustomerForm.get('fullname')?.value,
        email: this.editCustomerForm.get('email')?.value,
        phone: this.editCustomerForm.get('phone')?.value,
        address: this.editCustomerForm.get('address')?.value,
        // avatar: this.editCustomerForm.get('avatar')?.value 
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