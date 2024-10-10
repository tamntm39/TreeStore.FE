import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUserRequest, UpdateUserResponse, User, UserResponse } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';
import Swal from 'sweetalert2';

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
  userDB = undefined as UserResponse;
  editUserForm: FormGroup;
  availableRoles = []; // Danh sách các vai trò có sẵn
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // Khởi tạo form
    this.editUserForm = this.fb.group({
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
    this.userService.apiUserGetRolesGet$Json$Response().subscribe({
      next: (response) => {
        if (response.body.success) {
          // Áp dụng danh sách vai trò từ API vào availableRoles
          this.availableRoles = response.body.data.map((role) => ({
            id: role.roleId,
            name: role.name
          }));
        } else {
          console.error('Lấy danh sách vai trò thất bại:', response.body.message);
        }
      },
      error: (error) => {
        console.error('Có lỗi xảy ra khi lấy danh sách vai trò:', error);
      }
    });

    // Lấy ID người dùng từ route
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.userId);
    // Gọi API hoặc dịch vụ để lấy thông tin người dùng bằng ID
    this.userService.apiUserGetUserByIdGet$Json$Response({ userId: this.userId }).subscribe((rs) => {
      if (rs.body.success == true) {
        this.userDB = rs.body.data;
        this.editUserForm.patchValue({
          fullname: this.userDB.fullname,
          email: this.userDB.email,
          phone: this.userDB.phone,
          address: this.userDB.address,
          birthday: this.userDB.birthday,
          avatar: this.userDB.avatar,
          position: this.userDB.position
        });
        // Set giá trị cho lstRolesId
        const lstRolesIdArray = this.editUserForm.get('lstRolesId') as FormArray;
        this.userDB.lstRolesId.forEach((roleId: number) => {
          lstRolesIdArray.push(this.fb.control(roleId));
        });
      } else {
        console.log('Lấy dữ liệu thất bại');
      }
    });
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
  cancel() {
    this.router.navigate(['/manages/user/user-list']); // Quay lại danh sách người dùng khi nhấn hủy
  }

  onSubmit() {
    console.log("SSSSS");
    if (this.editUserForm.valid) {
      // Lấy dữ liệu từ form và thêm userId
      const updatedUser = {
        userId: this.userId, // Thêm userId vào payload
        fullname: this.editUserForm.get('fullname')?.value || null,
        email: this.editUserForm.get('email')?.value || null,
        phone: this.editUserForm.get('phone')?.value || null,
        address: this.editUserForm.get('address')?.value || null,
        birthday: this.editUserForm.get('birthday')?.value || null,
        listRoles: this.editUserForm.get('lstRolesId')?.value || [] // Lấy lstRolesId từ form
      } as UpdateUserRequest;

      // Gọi API cập nhật người dùng
      this.userService.apiUserUpdateUserPut$Json$Response({ body: updatedUser }).subscribe({
        next: (rs) => {
          if (rs.body.success) {
            Swal.fire({
              icon: 'success',
              title: 'Cập nhật thành công',
              text: 'Thông tin người dùng đã được cập nhật thành công!',
              confirmButtonText: 'OK'
            }).then(() => {
              // Điều hướng về trang danh sách người dùng sau khi bấm OK
              this.router.navigate(['/manages/user/user-list']);
            });
          } else {
            console.log('Cập nhật thất bại:', rs.body.message); // Log thông báo lỗi từ backend
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
}
