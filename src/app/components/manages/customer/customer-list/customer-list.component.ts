import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerResponse } from 'src/app/api/models';
import { CustomerService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  listCustomersDB: Array<CustomerResponse> = [];
  filteredCustomers: Array<CustomerResponse> = []; // Danh sách đã lọc
  searchTerm: string = ''; // Từ tìm kiếm

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.loadCustomers(); // Tải danh sách khách hàng khi khởi tạo
  }

  loadCustomers(): void {
    this.customerService.apiCustomerListCustomerGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      console.log('Dữ liệu trả về từ API:', response);

      if (response.success) {
        this.listCustomersDB = response.data;
        this.filteredCustomers = this.listCustomersDB; // Khởi tạo danh sách đã lọc
        console.log('Danh sách khách hàng:', this.filteredCustomers);
      } else {
        console.error('Lấy danh sách khách hàng thất bại!');
      }
    });
  }

  filterCustomers(): void {
    const normalizedSearchTerm = this.searchTerm.toLowerCase().trim();
    this.filteredCustomers = this.listCustomersDB.filter(customer =>
      customer.fullname.toLowerCase().includes(normalizedSearchTerm) ||
      customer.email.toLowerCase().includes(normalizedSearchTerm) ||
      customer.phone.includes(normalizedSearchTerm) ||
      customer.address.toLowerCase().includes(normalizedSearchTerm) // Nếu bạn cũng muốn tìm theo địa chỉ
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
        this.customerService.apiCustomerChangeActivePost$Json$Response({ customerId: customer.customerId })
          .subscribe((rs) => {
            const response = rs.body;
            if (response.success) {
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
