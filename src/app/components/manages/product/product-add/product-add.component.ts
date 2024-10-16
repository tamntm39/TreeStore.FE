import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProductRequest } from 'src/app/api/models';
import { CategoryService, ProductService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  editProductForm: FormGroup;
  product = {
    type: '',
    name: '',
    quantity: 0,
    price: 0,
    image: null
  };
  listCategory = [];
  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    this.editProductForm = this.fb.group({
      name: [''],
      quantity: [''],
      priceOutput: [''],
      description: [''],
      categoryId: ['']
    });
  }
  ngOnInit() {
    this.categoryService.apiCategoryGetAllGet$Json$Response().subscribe((response) => {
      if (response.body.success) {
        this.listCategory = response.body.data.map((category) => ({
          id: category.categoryId,
          name: category.name
        }));
      } else {
        console.error('Lấy danh sách loại thất bại:', response.body.message);
      }
    });
  }
  onSubmit() {
    if (this.editProductForm.valid) {
      // Lấy dữ liệu từ form
      const newProduct = {
        name: this.editProductForm.get('name')?.value || null,
        quantity: this.editProductForm.get('quantity')?.value || null,
        priceOutput: this.editProductForm.get('priceOutput')?.value || null,
        description: this.editProductForm.get('description')?.value || null,
        categoryId: parseInt(this.editProductForm.get('categoryId')?.value, 10) || null
      } as CreateProductRequest;

      // Gọi API để thêm người dùng mới
      this.productService.apiProductCreatePost$Json$Response({ body: newProduct }).subscribe({
        next: (rs) => {
          if (rs.body.success) {
            Swal.fire({
              icon: 'success',
              title: 'Thêm thông tin cây thành công',
              text: rs.body.message,
              confirmButtonText: 'OK'
            }).then(() => {
              // Điều hướng về trang danh sách người dùng sau khi bấm OK
              this.router.navigate(['/manages/product/product-list']);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Thêm thông tin cây thất bại thất bại',
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

  cancel() {
    console.log('Hủy đã được nhấn');
    this.router.navigate(['/manages/product/product-list']); // Quay lại danh sách sản phẩm khi nhấn hủy
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Xử lý file tải lên
      this.product.image = file; // Lưu trữ file hình ảnh
      console.log('File hình ảnh đã chọn:', file);
    }
  }
}
