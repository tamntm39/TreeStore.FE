import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  user = {
    fullname: '',
    email: '',
    position: '',
    birthday: ''
  };

  constructor(private router: Router) {}a

  onSubmit() {
    // Logic thêm người dùng
    console.log('Thêm người dùng:', this.user);
    // Sau khi thêm, bạn có thể điều hướng về danh sách người dùng
    this.router.navigate(['/user/user-list']);

  }

  cancel() {
    console.log('Hủy đã được nhấn');
    this.router.navigate(['/user/user-list']); // Quay lại danh sách người dùng khi nhấn hủy
  }
  
  
}
