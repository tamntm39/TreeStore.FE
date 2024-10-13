import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/api/models';
import { CategoryService } from 'src/app/api/services';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  listCategoriesDB: Array<Category> = [];

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }
  navigateToAddCategory() {
    console.log("Navigating to Add Category"); // Thêm log để kiểm tra
    this.router.navigate(['/manages/category/category-add']);
  }

  navigateToEditCategory(categoryId: number): void {
    this.router.navigate(['/manages/category/category-edit', categoryId]);
  } 
  loadCategories(): void {
    this.categoryService.apiCategoryGetAllGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success== true) {
        this.listCategoriesDB = response.data; // Giả sử response.data là mảng
      } else {
        console.log('Lấy ds danh mục thất bại!');
      }
    });
  }

 
}
