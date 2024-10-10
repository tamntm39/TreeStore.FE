import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Category {
  id: number;              // CategoryID
  name: string;           // Tên
  imagePlaceholder: string; // Hình Ảnh Placeholder
  createdOn: Date;        // Ngày Tạo
  totalProducts: number;   // Tổng Sản Phẩm
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Partial<Category> = {};  // Đối tượng để lưu thông tin loại cây mới
  showModal: boolean = false;            // Trạng thái hiển thị modal
  imagePreview: string | ArrayBuffer | null = null; // Biến lưu hình ảnh preview

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Giả lập dữ liệu
    this.categories = [
      { id: 1, name: 'Cây bonsai', imagePlaceholder: 'https://via.placeholder.com/100', createdOn: new Date('2022-01-01'), totalProducts: 10 },
      { id: 2, name: 'Cây phong thủy', imagePlaceholder: 'https://via.placeholder.com/100', createdOn: new Date('2022-02-01'), totalProducts: 15 },
      { id: 3, name: 'Cây mọng nước và xương rồng', imagePlaceholder: 'https://via.placeholder.com/100', createdOn: new Date('2022-03-01'), totalProducts: 20 },
    ];
  }

  openAddCategoryModal(): void {
    this.showModal = true;
    this.newCategory = {}; // Reset thông tin khi mở modal
    this.imagePreview = null; // Reset hình ảnh preview
  }

  closeAddCategoryModal(): void {
    this.showModal = false;
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result; // Lưu hình ảnh preview
      };
      reader.readAsDataURL(file); // Đọc file hình ảnh
    }
  }

  addCategory(): void {
    if (this.newCategory.name && this.imagePreview && this.newCategory.totalProducts !== undefined) {
      const newId = this.categories.length ? this.categories[this.categories.length - 1].id + 1 : 1;
      const categoryToAdd: Category = {
        id: newId,
        name: this.newCategory.name,
        imagePlaceholder: this.imagePreview as string, // Sử dụng hình ảnh preview
        createdOn: new Date(),
        totalProducts: this.newCategory.totalProducts,
      };
      this.categories.push(categoryToAdd);
      this.closeAddCategoryModal();
    }
  }

  onEdit(): void {
    this.router.navigate(['/manages/category/category-edit']); 
  }

  deleteCategory(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa loại cây này?')) {
      this.categories = this.categories.filter(category => category.id !== id);
    }
  }
}
