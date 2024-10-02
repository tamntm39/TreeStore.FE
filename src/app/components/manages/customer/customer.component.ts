import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  listUsers: Array<{ fullname: string, email: string, address: string, phone: string }> = [];

  constructor() {}

  ngOnInit(): void {
    // Khởi tạo dữ liệu giả lập cho danh sách người dùng
    this.listUsers = [
      { fullname: 'Phùng Bảo Khang', email: 'bonglon12@gmail.com', address: 'Quận 8 HCM', phone: '0906936035' },
      { fullname: 'Ngô Gia Bảo', email: 'bedemientay34@gmail.com', address: 'Quận 12 HCM', phone: '0947094670' }
    ];
  }
}
