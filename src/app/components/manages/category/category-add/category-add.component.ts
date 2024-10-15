import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  editCategoryForm: FormGroup;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    // Khởi tạo form với trường tên
    this.editCategoryForm = this.fb.group({
      name: ['', Validators.required] // Chỉ cần trường name là bắt buộc
    });
  }

  ngOnInit() {
    // Thêm bất kỳ logic khởi tạo nào nếu cần
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      // Lấy dữ liệu từ form
      const newCategory = {
        name: this.editCategoryForm.get('name')?.value || null,
        slug: null, // Các trường khác để null
        image: null,
        isActive: null,
        createOn: null,
        totalProduct: null
      };

      console.log('Dữ liệu sẽ được gửi:', newCategory); // Ghi dữ liệu ra console

      // Gọi API để thêm danh mục mới
      this.categoryService.apiCategoryCreatePost$Json$Response({ body: newCategory }).subscribe({
        next: (rs) => {
          if (rs.body.success) {
            Swal.fire({
              icon: 'success',
              title: 'Thêm danh mục thành công',
              text: rs.body.message,
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/manages/category/category-list']);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Thêm danh mục thất bại',
              text: rs.body.message,
              confirmButtonText: 'OK'
            });
          }
        },
        error: (error) => {
          console.error('Có lỗi xảy ra:', error);
          Swal.fire({
            icon: 'error',
            title: 'Có lỗi xảy ra',
            text: 'Vui lòng kiểm tra thông tin và thử lại.',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      console.log('Form không hợp lệ:', this.editCategoryForm.errors);
    }
  }

  cancel() {
    this.router.navigate(['/manages/category/category-list']);
  }
}