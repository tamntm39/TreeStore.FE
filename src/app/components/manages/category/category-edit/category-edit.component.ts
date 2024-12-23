import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    // Khởi tạo form với trường tên
    this.editCategoryForm = this.fb.group({
      name: ['', Validators.required], // Chỉ cần trường name là bắt buộc
      slug: [''], // Trường slug sẽ được cập nhật tự động
    });
  }

  ngOnInit() {
    // Lấy ID danh mục từ route
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;

    // Lấy dữ liệu danh mục theo ID
    this.categoryService.apiCategoryGetByIdCategoryIdGet$Json$Response({ categoryId: this.categoryId }).subscribe((rs) => {
      if (rs.body.success === true) {
        this.categoryDB = rs.body.data;

        // Cập nhật form với dữ liệu từ backend
        this.editCategoryForm.patchValue({
          name: this.categoryDB.name,
          slug: this.slugify(this.categoryDB.name), // Tạo slug từ tên
        });

        // Đăng ký lắng nghe thay đổi trên tên
        this.editCategoryForm.get('name')?.valueChanges.subscribe((value) => {
          this.updateSlug(value);
        });
      } else {
        console.log('Lấy dữ liệu danh mục thất bại');
      }
    });
  }

  // Hàm chuyển đổi tên thành slug
  private slugify(name: string): string {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu '-'
      .replace(/[^\w\-]+/g, '') // Xóa các ký tự không phải chữ cái, số và dấu '-'
      .replace(/\--+/g, '-') // Thay thế nhiều dấu '-' bằng một dấu '-'
      .trim(); // Loại bỏ khoảng trắng ở đầu và cuối
  }

  // Cập nhật slug khi tên thay đổi
  private updateSlug(name: string) {
    const slug = this.slugify(name);
    this.editCategoryForm.patchValue({ slug });
  }

  cancel() {
    this.router.navigate(['/manages/category/category-list']); // Quay lại danh sách danh mục
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      // Chuẩn bị dữ liệu cập nhật danh mục
      const updatedCategory = {
        categoryId: this.categoryId,
        name: this.editCategoryForm.get('name')?.value || null,
        // slug: this.editCategoryForm.get('slug')?.value || null, // Slug sẽ được cập nhật tự động
      };

      // Gọi API cập nhật danh mục
      this.categoryService.apiCategoryUpdatePut$Json$Response({ body: updatedCategory }).subscribe({
        next: (rs) => {
          if (rs.body.success === true) {
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
            Swal.fire({
              icon: 'error',
              title: 'Cập nhật thất bại',
              text: rs.body.message,
              confirmButtonText: 'OK'
            });
          }
        },
        error: (error) => {
          console.error('Có lỗi xảy ra:', error); // Log lỗi chi tiết
          Swal.fire({
            icon: 'error',
            title: 'Có lỗi xảy ra',
            text: 'Vui lòng kiểm tra thông tin và thử lại.',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      console.log('Form không hợp lệ');
    }
  }
}
