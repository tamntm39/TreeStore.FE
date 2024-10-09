import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/api/models';
import { CustomerService } from 'src/app/api/services';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customerID: number;
  customer: { fullname: string; email: string; address: string; phone: string } = {
    fullname: '',
    email: '',
    address: '',
    phone: ''
  };
  customerDB: Customer;
  editCustomerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {
    this.editCustomerForm = this.fb.group({
      fullName: [''],
      email: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {
    // Nhận thông tin từ route (hoặc API)
    this.customerID = +this.route.snapshot.paramMap.get('id');

    this.customerService.apiCustomerGetCustomerByIdGet$Json$Response({ customerId: this.customerID }).subscribe((rs) => {
      const response = rs.body;
      if (response.success == true) {
        this.customerDB = response.data;
        this.editCustomerForm.patchValue({
          fullName: this.customerDB.fullName,
          email: this.customerDB.email,
          phone: this.customerDB.phone
        });
      } else {
        console.log('Lấy ds khách hàng thất bại!');
      }
    });
    // Ví dụ: Load thông tin từ API
    // if (userId) {
    //   // Giả lập dữ liệu
    //   this.customer = {
    //     fullname: '',
    //     email: '',
    //     address: '',
    //     phone: ''
    //   };
    // }
  }

  onSubmit(): void {
    // // Logic để lưu thay đổi
    // console.log('Thông tin người dùng đã được lưu:', this.customer);
    // this.router.navigate(['/customer']);

    if (this.editCustomerForm.valid) {
      const updatedCustomer = this.editCustomerForm.value;

      console.log(updatedCustomer, 'updatedCustomer');
      // this.userService.apiUserEditUserPut(this.userId, updatedUser).subscribe((rs) => {
      //   if (rs.success) {
      //     console.log('Cập nhật thành công');
      //     // Điều hướng về trang khác hoặc thông báo thành công
      //   } else {
      //     console.log('Cập nhật thất bại');
      //   }
      // });
    }
  }

  onCancel(): void {
    this.router.navigate(['/manages/customer/customer-list']);
  }
}
