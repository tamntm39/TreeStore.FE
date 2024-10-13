import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductResponse, UpdateProductRequest } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productId: number;
  product = {
    name: '',
    type: '',
    quantity: '',
    price: '',
    image: null
  };
  productDB = undefined as ProductResponse;
  editProductForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.editProductForm = this.fb.group({
      name: [''],
      quantity: [''],
      priceOutput: [''],
      category: [''],
      description: ['']
      // img: ['']
    });
  }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.productId);

    this.productService.apiProductGetProductByIdGet$Json$Response({ productId: this.productId }).subscribe((rs) => {
      const response = rs.body;
      console.log(response);
      if (response.success == true) {
        this.productDB = rs.body.data;
        this.editProductForm.patchValue({
          name: this.productDB.name,
          quantity: this.productDB.quantity,
          priceOutput: this.productDB.priceOutput,
          category: this.productDB.categoryId,
          // img: this.productDB.img,
          description: this.productDB.description
        });
        console.log(this.editProductForm, 'Du lieu');
      }
    });
  }

  // onSubmit() {
  //   // Logic cập nhật thông tin cây
  //   console.log('Cập nhật thông tin cây:', this.product);
  //   // Sau khi cập nhật, điều hướng về danh sách cây
  //   this.router.navigate(['/manages/product/product-list']);
  // }
  cancel() {
    console.log('Hủy đã được nhấn');
    this.router.navigate(['/manages/product/product-list']); // Quay lại danh sách sản phẩm khi nhấn hủy
  }
  onSubmit() {
    console.log('SSSSS');
    if (this.editProductForm.valid) {
      // Lấy dữ liệu từ form và thêm userId
      const updatedProduct = {
        productId: this.productId, // Thêm userId vào payload
        name: this.editProductForm.get('name')?.value || null,
        quantity: this.editProductForm.get('quantity')?.value || null,
        priceOutput: this.editProductForm.get('priceOutput')?.value || null,
        description: this.editProductForm.get('description')?.value || null,
        // img: this.editProductForm.get('img')?.value || null,
        categoryId: this.editProductForm.get('category')?.value || [] // Lấy lstRolesId từ form
      } as UpdateProductRequest;
      this.productService.apiProductUpdatePut$Json$Response({ body: updatedProduct }).subscribe((rs) => {
        if (rs.body.success == true) {
          Swal.fire({
            icon: 'success',
            title: 'Cập nhật thành công',
            text: 'Thông tin thông tin cây đã được cập nhật thành công!',
            confirmButtonText: 'OK'
          }).then(() => {
            // Điều hướng về trang danh sách người dùng sau khi bấm OK
            this.router.navigate(['/manages/product/product-list']);
          });
        } else {
          console.log('Cập nhật thất bại:', rs.body.message); // Log thông báo lỗi từ backend
        }
      });
      // this.productDB.Upda({ body: updatedUser }).subscribe({
      //   next: (rs) => {
      //     if (rs.body.success) {
      //       Swal.fire({
      //         icon: 'success',
      //         title: 'Cập nhật thành công',
      //         text: 'Thông tin người dùng đã được cập nhật thành công!',
      //         confirmButtonText: 'OK'
      //       }).then(() => {
      //         // Điều hướng về trang danh sách người dùng sau khi bấm OK
      //         this.router.navigate(['/manages/user/user-list']);
      //       });
      //     } else {
      //       console.log('Cập nhật thất bại:', rs.body.message); // Log thông báo lỗi từ backend
      //     }
      //   },
      //   error: (error) => {
      //     console.error('Có lỗi xảy ra:', error); // Log lỗi chi tiết
      //   }
      // });
    } else {
      console.log('Form không hợp lệ');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Xử lý file tải lên
      this.product.image = file;
      console.log('File hình ảnh đã chọn:', file);
    }
  }
}
