import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  listUsers: Array<{ fullname: string, email: string, address: string, phone: string }> = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Khởi tạo dữ liệu giả lập cho danh sách người dùng
    this.listUsers = [
      { fullname: 'Phùng Bảo Khang', email: 'bonglon12@gmail.com', address: 'Quận 8 HCM', phone: '0906936035' },
      { fullname: 'Ngô Gia Bảo', email: 'bedemientay34@gmail.com', address: 'Quận 12 HCM', phone: '0947094670' }
    ];
  }
  onEdit(): void {
    this.router.navigate(['/manages/customer/customer-edit']);
  }
}
