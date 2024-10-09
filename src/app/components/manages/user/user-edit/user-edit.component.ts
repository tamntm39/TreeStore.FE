import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';

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
  userDB = undefined as User;
  editUserForm: FormGroup;

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
      phone: ['']
    });
  }

  ngOnInit() {
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
          phone: this.userDB.phone
        });
      } else {
        console.log('Lấy dữ liệu thất bại');
      }
    });
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

  // onSubmit() {
  //   // Logic cập nhật thông tin người dùng
  //   console.log('Cập nhật người dùng:', this.user);
  //   // Sau khi cập nhật, bạn có thể điều hướng về danh sách người dùng
  //   this.router.navigate(['/manages/user/user-list']);
  // }

  cancel() {
    this.router.navigate(['/manages/user/user-list']); // Quay lại danh sách người dùng khi nhấn hủy
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      const updatedUser = this.editUserForm.value;

      console.log(updatedUser, 'updatedUser');
      // this.userService.apiUserEditUserPut(this.userId, updatedUser).subscribe((rs) => {
      //   if (rs.success) {
      //     console.log('Cập nhật thành công');
      //     // Điều hướng về trang khác hoặc thông báo thành công
      //   } else {
      //     console.log('Cập nhật thất bại');
      //   }
      // });
    }
  }
}
