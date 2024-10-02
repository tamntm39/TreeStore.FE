import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userId: number;
  user = {
    fullname: '',
    email: '',
    position: '',
    birthday: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Lấy ID người dùng từ route
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    
    // Gọi API hoặc dịch vụ để lấy thông tin người dùng bằng ID
    this.getUserById(this.userId);
  }

  getUserById(userId: number) {
    // Logic để lấy thông tin người dùng
    // Giả sử bạn có một dịch vụ gọi là userService
    // this.userService.getUserById(userId).subscribe(user => this.user = user);

    // Dữ liệu mẫu
    this.user = { 
      fullname: 'Ngô Gia Bảo', 
      email: 'a@example.com', 
      position: 'Admin', 
      birthday: '2000-01-01' 
    };
  }

  onSubmit() {
    // Logic cập nhật thông tin người dùng
    console.log('Cập nhật người dùng:', this.user);
    // Sau khi cập nhật, bạn có thể điều hướng về danh sách người dùng
    this.router.navigate(['/manages/user/user-list']);
  }

  cancel() {
    this.router.navigate(['/manages/user/user-list']); // Quay lại danh sách người dùng khi nhấn hủy
  }
}
