import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerResponse } from 'src/app/api/models'; // Đảm bảo bạn import đúng CustomerResponse
import { CustomerService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  listCustomersDB: Array<CustomerResponse> = []; // Sử dụng CustomerResponse
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadCustomers(); // Gọi loadCustomers trong ngOnInit để tải dữ liệu ban đầu
  }

  loadCustomers(): void {
    this.customerService.apiCustomerListCustomerGet$Json$Response().subscribe(
      (rs) => {
        const response = rs.body; // Kiểm tra phản hồi
        if (response.success) {
          this.listCustomersDB = response.data; // Gán dữ liệu
        } else {
          console.error('Lấy danh sách khách hàng thất bại!');
        }
      },
      (error) => {
        console.error('Lỗi khi lấy danh sách khách hàng:', error); // Xử lý lỗi
      }
    );
  }

  navigateToEditCustomer(customerId: number) {
    this.router.navigate(['/manages/customer/customer-edit', customerId]);
  }

  toggleCustomerActiveStatus(customer: CustomerResponse) {
    const newStatus = !customer.isActive; // Lưu trạng thái mới
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: `Bạn có muốn chuyển trạng thái người dùng này thành ${newStatus ? 'kích hoạt' : 'vô hiệu khóa'}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Thực hiện!',
      cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.apiCustomerChangeActivePost$Json$Response({ customerId: customer.customerId }).subscribe((rs) => {
          const response = rs.body;
          if (response.success) {
            // Cập nhật trạng thái isActive
            customer.isActive = newStatus;

            Swal.fire(
              'Cập nhật!',
              `Đã cập nhật thành công thành trạng thái ${newStatus ? 'Kích hoạt' : 'Vô hiệu khóa'}.`,
              'success'
            );
          } else {
            Swal.fire('Cập nhật thất bại!', response.message, 'error');
          }
        });
      }
    });
  }
}
