import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  listUsers = [
    // Dữ liệu mẫu, bạn có thể thay thế bằng dữ liệu thực từ API
    { id: 1, fullname: 'Ngô Gia Bảo', email: 'a@example.com', position: 'Admin', birthday: '2000-01-01' },
    { id: 2, fullname: 'Con đỉ Nhất DUy', email: 'b@example.com', position: 'Gay', birthday: '1995-05-05' }
  ];

  constructor(private router: Router) {}

  navigateToAddUser() {
    console.log('Navigating to Add User');
    this.router.navigate(['/manages/user/user-add']);
  }
  


  navigateToEditUser(userId: number) {
    console.log('Navigating to Add User');
    this.router.navigate(['/manages/user/user-edit']);
  }

  deleteUser(userId: number) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa người dùng này không?');
    if (confirmDelete) {
      this.listUsers = this.listUsers.filter(user => user.id !== userId);
      console.log(`Xóa người dùng có ID: ${userId}`);
    }
  }
  
}
