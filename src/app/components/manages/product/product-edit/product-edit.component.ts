import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { ProductResponse, UpdateProductRequest, UploadFileModel } from 'src/app/api/models';
import { CategoryService, ProductService, UploadService } from 'src/app/api/services';
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
  productImageUrl: string | null = null; // Thêm thuộc tính để lưu URL hình ảnh
  productDB = undefined as ProductResponse;
  editProductForm: FormGroup;
  listCategory = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private uploadService: UploadService,
    private fb: FormBuilder,
    protected config: ApiConfiguration,
    private http: HttpClient
  ) {
    this.editProductForm = this.fb.group({
      name: [''],
      quantity: [''],
      priceOutput: [''],
      category: [''],
      description: [''],
      lstCategoryId: this.fb.array([]) // Thêm lstRolesId

      // img: ['']
    });
  }
  private _rootUrl?: string;

  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }
  ngOnInit() {
    this.categoryService.apiCategoryGetAllGet$Json$Response().subscribe((response) => {
      if (response.body.success) {
        this.listCategory = response.body.data.map((category) => ({
          id: category.categoryId,
          name: category.name
        }));

        this.productId = +this.route.snapshot.paramMap.get('id')!;

        this.productService.apiProductGetProductByIdGet$Json$Response({ productId: this.productId }).subscribe((rs) => {
          const response = rs.body;
          console.log(response);
          if (response.success == true) {
            this.productDB = rs.body.data;
            this.productImageUrl = this.productDB.img;
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
      } else {
        console.error('Lấy danh sách loại thất bại:', response.body.message);
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
        img: this.productImageUrl,
        categoryId: parseInt(this.editProductForm.get('category')?.value, 10) || null
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
 
  uploadFileModel: UploadFileModel;
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      let fileToUpload = file;
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      this.http.post(`${this.rootUrl}/api/Upload/Upload`, formData).subscribe(
        (rs) => {
          console.log(rs);
          if (rs['success']) {
            this.uploadFileModel = rs['data'];
            this.productImageUrl = this.uploadFileModel.pathSave; // Cập nhật URL hình ảnh
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Upload thất bại',
              text: 'Không thể tải lên hình ảnh!'
            });
          }
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Upload thất bại',
            text: 'Không thể tải lên hình ảnh!'
          });
        }
      );
    }
  }
}
