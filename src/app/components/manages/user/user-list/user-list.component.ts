import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  listUsersDB = [] as User[];
  searchTerm: string = ''; // Search term for filtering users
  // listUsers = [
  // Dữ liệu mẫu, bạn có thể thay thế bằng dữ liệu thực từ API
  //   { id: 1, fullname: 'Ngô Gia Bảo', email: 'a@example.com', position: 'Admin', birthday: '2000-01-01' },
  //   { id: 2, fullname: 'Nhất DUy', email: 'b@example.com', position: 'Gay', birthday: '1995-05-05' }
  // ];

  constructor(
    private router: Router,
    private userService: UserService
    
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.userService.apiUserListUserGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.listUsersDB = response.data;
        console.log(this.listUsersDB);
      } else {
        console.log('Lấy dữ liệu ds user thất bại');
      }
    });
  }
  navigateToAddUser() {
    console.log('Navigating to Add User');
    this.router.navigate(['/manages/user/user-add']);
  }

  navigateToEditUser(userId: number) {
    this.router.navigate(['/manages/user/user-edit', userId]);
  }

  toggleUserActiveStatus(user: User) {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: `Bạn có muốn chuyển trạng thái người dùng này thành ${user.isActive ? 'vô hiệu khóa' : 'kích hoạt'}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Thực hiện!',
      cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.apiUserChangeActivePost$Json$Response({ userId: user.userId }).subscribe((rs) => {
          const response = rs.body;
          if (response.success) {
            Swal.fire(
              'Cập nhật!',
              `Đã cập nhật thành công thành trạng thái ${user.isActive ? 'Vô hiệu khóa' : 'Kích hoạt'}.`,
              'success'
            ).then(() => {
              this.loadUsers();
              // window.location.reload();
            });
          } else {
            Swal.fire('Cập nhật thất bại!', response.message, 'error');
          }
        });
      }
    });
  }
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      // Nếu không có từ khóa tìm kiếm, trả lại toàn bộ danh sách người dùng
      this.listUsersDB = this.listUsersDB;
    } else {
      // Lọc danh sách người dùng theo tên người dùng
      this.listUsersDB = this.listUsersDB.filter(user =>
        user.fullname.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}