import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Category {
  id: number;
  name: string;
  imagePlaceholder: string;
  createdOn: Date;
  totalProducts: number;
}

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  category: Category = { id: 0, name: '', imagePlaceholder: '', createdOn: new Date(), totalProducts: 0 };
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadCategory(id); // Tải dữ liệu loại cây
  }

  loadCategory(id: number): void {
    // Giả lập dữ liệu cho ví dụ
    const categories: Category[] = [
      { id: 1, name: 'Cây Bàng', imagePlaceholder: 'https://via.placeholder.com/100', createdOn: new Date('2022-01-01'), totalProducts: 10 },
      { id: 2, name: 'Cây Xoài', imagePlaceholder: 'https://via.placeholder.com/100', createdOn: new Date('2022-02-01'), totalProducts: 15 },
      { id: 3, name: 'Cây Dừa', imagePlaceholder: 'https://via.placeholder.com/100', createdOn: new Date('2022-03-01'), totalProducts: 20 },
    ];
    
    this.category = categories.find(c => c.id === id) || this.category;
    this.imagePreview = this.category.imagePlaceholder; // Thiết lập hình ảnh preview
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

  updateCategory(): void {
    // Logic cập nhật loại cây
    console.log('Cập nhật loại cây:', this.category);
    // Thực hiện các hành động cần thiết (như gọi API)
    this.router.navigate(['/manages/category/category-list']); // Quay lại danh sách loại cây
  }

  cancel(): void {
    this.router.navigate(['/manages/category/category-list']); // Quay lại danh sách loại cây
  }
}
