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
    this.router.navigate(['/manages/user/user-add']);
  }

  navigateToEditUser(userId: number) {
    this.router.navigate(['/manages/user/user-edit', userId]);
  }

  toggleUserActiveStatus(user: User) {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: `Bạn có muốn chuyển trạng thái người dùng này thành ${user.isActive ? 'vô hiệu hóa' : 'kích hoạt'}.`,
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
              `Đã cập nhật thành công thành trạng thái ${user.isActive ? 'Vô hiệu hóa' : 'Kích hoạt'}.`,
              'success'
            ).then(() => {
              this.loadUsers();
            });
          } else {
            Swal.fire('Cập nhật thất bại!', response.message, 'error');
          }
        });
      }
    });
  }

  // Phương thức tìm kiếm người dùng theo tên
  onSearch(): void {
    const filteredUsers = this.listUsersDB.filter(user =>
      user.fullname.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (filteredUsers.length === 0) {
      // Hiển thị thông báo nếu không tìm thấy kết quả
      Swal.fire({
        title: 'Không tìm thấy',
        text: `Không có người dùng nào khớp với từ khóa "${this.searchTerm}"`,
        icon: 'warning',
        confirmButtonText: 'Đóng'
      });
    } else {
      // Nếu có kết quả, hiển thị danh sách đã lọc
      this.listUsersDB = filteredUsers;
    }
  }
}

