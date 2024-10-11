import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    // Khởi tạo form
    this.editCategoryForm = this.fb.group({
      categoryId: [''],
      name: [''],
      image: [''],
      createOn: [''],
      totalProduct: ['']
    });
  }

  ngOnInit() {
    // Thêm bất kỳ logic khởi tạo nào nếu cần
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      // Lấy dữ liệu từ form
      const newCategory = {
        categoryId: this.editCategoryForm.get('categoryId')?.value || null,
        name: this.editCategoryForm.get('name')?.value || null,
        image: this.editCategoryForm.get('image')?.value || null,
        createOn: this.editCategoryForm.get('createOn')?.value || null,
        totalProduct: this.editCategoryForm.get('totalProduct')?.value || null
      };

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
              // Điều hướng về trang danh sách danh mục sau khi bấm OK
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
          console.error('Có lỗi xảy ra:', error); // Log lỗi chi tiết
        }
      });
    } else {
      console.log('Form không hợp lệ');
    }
  }

  // Hàm xử lý thay đổi hình ảnh
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.editCategoryForm.patchValue({
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  cancel() {
    this.router.navigate(['/manages/category/category-list']);
  }
}
