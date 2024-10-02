import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customer: { fullname: string; email: string; address: string; phone: string } = {
    fullname: '',
    email: '',
    address: '',
    phone: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Nhận thông tin từ route (hoặc API)
    const userId = this.route.snapshot.paramMap.get('id');
    // Ví dụ: Load thông tin từ API
    if (userId) {
      // Giả lập dữ liệu 
      this.customer = {
        fullname: '',
        email: '',
        address: '',
        phone: ''
      };
    }
  }

  onSubmit(): void {
    // Logic để lưu thay đổi 
    console.log('Thông tin người dùng đã được lưu:', this.customer);
    this.router.navigate(['/customer']);
  }

  onCancel(): void {
    this.router.navigate(['/manages/customer/customer-list']);
  }
}
