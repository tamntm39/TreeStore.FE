import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserRequest } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  editUserForm: FormGroup;
  availableRoles = []; // Danh sách các vai trò có sẵn

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // Khởi tạo form
    this.editUserForm = this.fb.group({
      username: [''],
      fullname: [''],
      email: [''],
      phone: [''],
      address: [''],
      birthday: [''],
      avatar: [''],
      position: [''],
      lstRolesId: this.fb.array([]) // Thêm lstRolesId
    });
  }

  ngOnInit() {
    this.userService.apiUserGetRolesGet$Json$Response().subscribe((response) => {
      if (response.body.success) {
        // Áp dụng danh sách vai trò từ API vào availableRoles
        this.availableRoles = response.body.data.map((role) => ({
          id: role.roleId,
          name: role.name
        }));
      } else {
        console.error('Lấy danh sách vai trò thất bại:', response.body.message);
      }
    });
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      // Lấy dữ liệu từ form
      const newUser = {
        fullname: this.editUserForm.get('fullname')?.value || null,
        username: this.editUserForm.get('username')?.value || null,
        email: this.editUserForm.get('email')?.value || null,
        phone: this.editUserForm.get('phone')?.value || null,
        address: this.editUserForm.get('address')?.value || null,
        birthday: this.editUserForm.get('birthday')?.value || null,
        avatar: this.editUserForm.get('avatar')?.value || null,
        position: this.editUserForm.get('position')?.value || null,
        listRoles: this.editUserForm.get('lstRolesId')?.value || [] // Lấy lstRolesId từ form
      } as CreateUserRequest;

      // Gọi API để thêm người dùng mới
      this.userService.apiUserCreatePost$Json$Response({ body: newUser }).subscribe({
        next: (rs) => {
          if (rs.body.success) {
            Swal.fire({
              icon: 'success',
              title: 'Thêm người dùng thành công',
              text: rs.body.message,
              confirmButtonText: 'OK'
            }).then(() => {
              // Điều hướng về trang danh sách người dùng sau khi bấm OK
              this.router.navigate(['/manages/user/user-list']);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Thêm người dùng thất bại',
              text: rs.body.message,
              confirmButtonText: 'OK'
            });
          }
        },
        error: (error) => {
          console.error('Có lỗi xảy ra:', error); // Log lỗi chi tiết
        }
      });
    } else {
      console.log('Form không hợp lệ');
    }
  }

  // Hàm cập nhật lstRolesId khi chọn hoặc bỏ chọn
  onRoleChange(event: any) {
    const lstRolesIdArray = this.editUserForm.get('lstRolesId') as FormArray;
    const roleId = event.target.value;
    if (event.target.checked) {
      lstRolesIdArray.push(this.fb.control(roleId));
    } else {
      const index = lstRolesIdArray.controls.findIndex((x) => x.value == roleId);
      lstRolesIdArray.removeAt(index);
    }
  }
}
