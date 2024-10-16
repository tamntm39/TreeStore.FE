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
  Customer:Array<Customer> =[]
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.apiCustomerListCustomerGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      console.log('Dữ liệu trả về từ API:', response); // Kiểm tra dữ liệu nhận được

      if (response.success) {
        this.listCustomersDB = response.data; // Gán dữ liệu
        console.log('Danh sách khách hàng:', this.listCustomersDB); // Kiểm tra danh sách đã gán
      } else {
        console.error('Lấy danh sách khách hàng thất bại!');
      }
    });
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

  toggleCustomerActiveStatus(customer: Customer) {
    Swal.fire({
      title: 'Bạn chắc chắn?',
      text: `Bạn có muốn chuyển trạng thái khách hàng này thành ${customer.isActive ? 'vô hiệu hóa' : 'kích hoạt'}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Thực hiện!',
      cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
      if (result.isConfirmed) {
        // Gọi API để chuyển đổi trạng thái
        this.customerService.apiCustomerChangeActivePost$Json$Response({ customerId: customer.customerId })
          .subscribe((rs) => {
            const response = rs.body;
            if (response.success) {
              // Cập nhật trạng thái isActive của customer
              customer.isActive = !customer.isActive; // Đảo ngược trạng thái
  
              Swal.fire(
                'Cập nhật!',
                `Đã cập nhật thành công trạng thái ${customer.isActive ? 'kích hoạt' : 'vô hiệu hóa'}.`,
                'success'
              );
            } else {
              Swal.fire('Cập nhật thất bại!', response.message, 'error');
            }
          }, (error) => {
            console.error('Lỗi khi cập nhật trạng thái:', error);
            Swal.fire('Lỗi!', 'Có lỗi xảy ra khi cập nhật trạng thái.', 'error');
          });
      }
    });
  }
  



}