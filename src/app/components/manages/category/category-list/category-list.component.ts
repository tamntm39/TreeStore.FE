// src/app/components/category-list/category-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/api/models/category'; // Nhập mô hình Category
import { CategoryService } from 'src/app/api/services/category.service'; // Nhập CategoryService
import Swal from 'sweetalert2';
import { BooleanResultCustomModel } from 'src/app/api/models/boolean-result-custom-model'; // Nhập mô hình BooleanResultCustomModel

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  listCategoriesDB: Category[] = []; // Danh sách danh mục

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories(); // Tải danh sách danh mục khi khởi tạo
  }

  loadCategories(): void {
    this.categoryService.apiCategoryGetAllGet$Json$Response().subscribe({
      next: (rs: any) => {
        const response = rs.body; // Lấy phản hồi từ API
        console.log('Response from API:', response); // Theo dõi phản hồi
        if (response && response.success) {
          this.listCategoriesDB = response.data || []; // Cập nhật danh sách danh mục
          console.log('Categories loaded:', this.listCategoriesDB); // Theo dõi danh sách
        } else {
          console.log('Lấy danh sách danh mục thất bại:', response?.message || 'Không có thông tin thêm.');
          Swal.fire('Lỗi', response?.message || 'Không thể tải danh sách danh mục.', 'error');
        }
      },
      error: (error) => {
        console.error('Lỗi khi gọi API:', error);
        Swal.fire('Lỗi', 'Không thể tải danh sách danh mục.', 'error');
      }
    });
  }

  toggleCategoryActiveStatus(category: Category) {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: `Bạn có muốn chuyển trạng thái người dùng này thành ${category.isActive ? 'vô hiệu khóa' : 'kích hoạt'}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Thực hiện!',
      cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.apiCategoryChangeActiveCategoryPost$Json$Response({ categoryId: category.categoryId }).subscribe((rs) => {
          const response = rs.body;
          if (response.success) {
            Swal.fire(
              'Cập nhật!',
              `Đã cập nhật thành công thành trạng thái ${category.isActive ? 'Vô hiệu khóa' : 'Kích hoạt'}.`,
              'success'
            ).then(() => {
              this.loadCategories();
              // window.location.reload();
            });
          } else {
            Swal.fire('Cập nhật thất bại!', response.message, 'error');
          }
        });
      }
    });
  }

  navigateToAddCategory(): void {
    this.router.navigate(['/manages/category/category-add']); // Đường dẫn đến trang thêm danh mục
  }

  navigateToEditCategory(categoryId: number): void {
    this.router.navigate(['/manages/category/category-edit', categoryId]); // Đường dẫn đến trang chỉnh sửa danh mục
  }

  
}
