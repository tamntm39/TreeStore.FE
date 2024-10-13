import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/api/models/category';
import { CategoryService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  categoryId: number;
  categoryDB: Category | undefined;
  editCategoryForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    // Khởi tạo form cho danh mục
    this.editCategoryForm = this.fb.group({
      name: [''],
      image: [''],
      createOn: [''],
      totalProduct: [0] // Giả sử totalProduct là số
    });
  }
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Cập nhật giá trị hình ảnh trong form
        this.editCategoryForm.patchValue({
          image: e.target.result // Lưu URL của hình ảnh
        });
      };
      reader.readAsDataURL(file); // Đọc file hình ảnh
    }
  }

  ngOnInit() {
    // Lấy ID danh mục từ route
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;

    // Lấy dữ liệu danh mục theo ID
    this.categoryService.apiCategoryGetByIdCategoryIdGet$Json$Response({ categoryId: this.categoryId }).subscribe((rs) => {
      if (rs.body.success == true) {
        this.categoryDB = rs.body.data;
        this.editCategoryForm.patchValue({
          name: this.categoryDB.name,
          image: this.categoryDB.image,
          createOn: this.categoryDB.createOn,
          totalProduct: this.categoryDB.totalProduct
        });
      } else {
        console.log('Lấy dữ liệu danh mục thất bại');
      }
    });
  }

  cancel() {
    this.router.navigate(['/manages/category/category-list']); // Quay lại danh sách danh mục
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      // Chuẩn bị dữ liệu cập nhật danh mục
      const updatedCategory = {
        categoryId: this.categoryId, // Thêm categoryId vào payload
        name: this.editCategoryForm.get('name')?.value || null,
        image: this.editCategoryForm.get('image')?.value || null,
        createOn: this.editCategoryForm.get('createOn')?.value || null,
        totalProduct: this.editCategoryForm.get('totalProduct')?.value || 0 // Mặc định là 0 nếu không cung cấp
      };

      // Gọi API cập nhật danh mục
      this.categoryService.apiCategoryUpdatePut$Json$Response({ body: updatedCategory }).subscribe({
        next: (rs) => {
          if (rs.body.success == true) {
            Swal.fire({
              icon: 'success',
              title: 'Cập nhật thành công',
              text: 'Thông tin danh mục đã được cập nhật thành công!',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/manages/category/category-list']); // Quay lại danh sách danh mục
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
