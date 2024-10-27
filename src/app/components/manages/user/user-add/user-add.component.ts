import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    // Khởi tạo form với validation
    this.editUserForm = this.fb.group({
      username: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
      avatar: [''], // Trường avatar không bắt buộc
      password: ['123456', Validators.required], // Mật khẩu mặc định
      isActive: ['1'], // Hoạt động mặc định (có thể thay đổi theo yêu cầu)
      lstRolesId: this.fb.array([]) // Danh sách vai trò
    });
  }

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
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
    // Kiểm tra xem form có hợp lệ không
    if (this.editUserForm.valid) {
        // Lấy dữ liệu từ form
        const newUser: CreateUserRequest = {
            fullname: this.editUserForm.get('fullname')?.value || null,
            username: this.editUserForm.get('username')?.value || null,
            email: this.editUserForm.get('email')?.value || null,
            phone: this.editUserForm.get('phone')?.value || null,
            address: this.editUserForm.get('address')?.value || null,
            birthday: this.editUserForm.get('birthday')?.value || null,
            avatar: this.editUserForm.get('avatar')?.value || null,
            password: this.editUserForm.get('password')?.value || null,
            isActive: '1', // Đặt giá trị isActive tự động là '1'
            listRoles: this.editUserForm.get('lstRolesId')?.value || [] // Lấy lstRolesId từ form
        };

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
        // Tạo danh sách các trường không hợp lệ
        const invalidFields = Object.keys(this.editUserForm.controls).filter(field => {
            return this.editUserForm.get(field)?.invalid && field !== 'avatar'; // Loại trừ trường avatar
        });

        // Hiển thị thông báo lỗi
        Swal.fire({
            icon: 'warning',
            title: 'Có lỗi xảy ra',
            text: `Vui lòng điền đầy đủ thông tin: ${invalidFields.join(', ')}`,
            confirmButtonText: 'OK'
        });
        console.log('Form không hợp lệ', invalidFields);
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
