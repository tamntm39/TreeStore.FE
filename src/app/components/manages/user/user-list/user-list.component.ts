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
    this.userService.apiUserListUserGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.listUsersDB = response.data;
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
  deleteUser(userId: number) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // const confirmDelete = confirm('Bạn có chắc chắn muốn xóa người dùng này không?');
    // if (confirmDelete) {
    //   this.listUsersDB = this.listUsersDB.filter((user) => user.userId !== userId);
    //   console.log(`Xóa người dùng có ID: ${userId}`);
    // }
  }
}
