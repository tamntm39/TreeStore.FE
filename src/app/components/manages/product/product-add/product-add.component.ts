import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProductRequest, UploadFileModel } from 'src/app/api/models';
import { CategoryService, ProductService } from 'src/app/api/services';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration } from 'src/app/api/api-configuration';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  editProductForm: FormGroup;
  listCategory = [];
  productImageUrl: string | null = null;
  uploadFileModel: UploadFileModel;

  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private http: HttpClient,
    protected config: ApiConfiguration
  ) {
    this.editProductForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      priceOutput: [0, [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      categoryId: ['', Validators.required]
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
      } else {
        console.error('Lấy danh sách loại thất bại:', response.body.message);
      }
    });
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      const newProduct = {
        name: this.editProductForm.get('name')?.value || '',
        quantity: this.editProductForm.get('quantity')?.value || 0,
        priceOutput: this.editProductForm.get('priceOutput')?.value || 0,
        description: this.editProductForm.get('description')?.value || '',
        categoryId: parseInt(this.editProductForm.get('categoryId')?.value, 10) || 0,
        img: this.productImageUrl
      } as CreateProductRequest;

      this.productService.apiProductCreatePost$Json$Response({ body: newProduct }).subscribe({
        next: (rs) => {
          if (rs.body.success) {
            Swal.fire({
              icon: 'success',
              title: 'Thêm sản phẩm thành công',
              text: rs.body.message,
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/manages/product/product-list']);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Thêm sản phẩm thất bại',
              text: rs.body.message,
              confirmButtonText: 'OK'
            });
          }
        },
        error: (error) => {
          console.error('Có lỗi xảy ra:', error);
          Swal.fire({
            icon: 'error',
            title: 'Lỗi hệ thống',
            text: 'Không thể thêm sản phẩm, vui lòng thử lại sau.',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Form không hợp lệ',
        text: 'Vui lòng điền đầy đủ thông tin.',
        confirmButtonText: 'OK'
      });
    }
  }

  cancel() {
    this.router.navigate(['/manages/product/product-list']);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);
      this.http.post(`${this.rootUrl}/api/Upload/Upload`, formData).subscribe(
        (rs: any) => {
          if (rs?.success) {
            this.uploadFileModel = rs.data;
            this.productImageUrl = this.uploadFileModel.pathSave;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Upload thất bại',
              text: 'Không thể tải lên hình ảnh!'
            });
          }
        },
        () => {
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
