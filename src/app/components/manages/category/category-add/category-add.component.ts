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
    // Khởi tạo form với các trường cần thiết
    this.editCategoryForm = this.fb.group({
      name: ['', Validators.required],
      slug: ['', Validators.required], // Thêm trường slug
      image: [''],
      isActive: [true], // Thêm trường isActive
      createOn: ['', Validators.required], // Đảm bảo trường này là bắt buộc
      totalProduct: [0, [Validators.required, Validators.min(0)]] // Đảm bảo trường này là bắt buộc và lớn hơn hoặc bằng 0
    });
  }

  ngOnInit() {
    // Thêm bất kỳ logic khởi tạo nào nếu cần
    this.editCategoryForm.get('name')?.valueChanges.subscribe(value => {
      this.updateSlug(value);
    });
  }

  private updateSlug(name: string) {
    // Chuyển đổi tên thành slug
    const slug = name
      .toLowerCase()
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu '-'
      .replace(/[^\w\-]+/g, '') // Xóa các ký tự không phải chữ cái, số và dấu '-'
      .replace(/\--+/g, '-') // Thay thế nhiều dấu '-' bằng một dấu '-'
      .trim(); // Loại bỏ khoảng trắng ở đầu và cuối

    this.editCategoryForm.patchValue({ slug });
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      // Lấy dữ liệu từ form
      const newCategory = {
        name: this.editCategoryForm.get('name')?.value || null,
        slug: this.editCategoryForm.get('slug')?.value || null, // Lấy slug
        image: this.editCategoryForm.get('image')?.value || null,
        isActive: this.editCategoryForm.get('isActive')?.value || true, // Thêm isActive
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
      console.log('Form không hợp lệ');
    }
  }

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