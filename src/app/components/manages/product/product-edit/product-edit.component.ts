import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { ProductResponse, UpdateProductRequest, UploadFileModel } from 'src/app/api/models';
import { CategoryService, ProductService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productId: number;
  productImageUrl: string | null = null;
  productDB: ProductResponse | undefined;
  editProductForm: FormGroup;
  listCategory = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    protected config: ApiConfiguration,
    private http: HttpClient
  ) {
    this.editProductForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      priceOutput: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private _rootUrl?: string;
  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  ngOnInit() {
    this.categoryService.apiCategoryGetAllGet$Json$Response().subscribe((response) => {
      if (response.body?.success) {
        this.listCategory = response.body.data.map((category) => ({
          id: category.categoryId,
          name: category.name
        }));

        this.productId = +this.route.snapshot.paramMap.get('id')!;
        this.productService.apiProductGetProductByIdGet$Json$Response({ productId: this.productId }).subscribe((rs) => {
          if (rs.body?.success) {
            this.productDB = rs.body.data;
            this.productImageUrl = this.productDB.img;
            this.editProductForm.patchValue({
              name: this.productDB.name,
              quantity: this.productDB.quantity,
              priceOutput: this.productDB.priceOutput,
              category: this.productDB.categoryId,
              description: this.productDB.description
            });
          } else {
            console.error('Lỗi lấy thông tin sản phẩm:', rs.body?.message);
          }
        });
      } else {
        console.error('Lấy danh sách loại sản phẩm thất bại:', response.body?.message);
      }
    });
  }

  cancel() {
    this.router.navigate(['/manages/product/product-list']);
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      const updatedProduct: UpdateProductRequest = {
        productId: this.productId,
        name: this.editProductForm.get('name')?.value,
        quantity: this.editProductForm.get('quantity')?.value,
        priceOutput: this.editProductForm.get('priceOutput')?.value,
        description: this.editProductForm.get('description')?.value,
        img: this.productImageUrl,
        categoryId: parseInt(this.editProductForm.get('category')?.value, 10)
      };
      
      this.productService.apiProductUpdatePut$Json$Response({ body: updatedProduct }).subscribe((rs) => {
        if (rs.body?.success) {
          Swal.fire({
            icon: 'success',
            title: 'Cập nhật thành công',
            text: 'Thông tin sản phẩm đã được cập nhật thành công!',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/manages/product/product-list']);
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Cập nhật thất bại',
            text: rs.body?.message || 'Có lỗi xảy ra khi cập nhật sản phẩm!'
          });
        }
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Cập nhật thất bại',
          text: 'Có lỗi xảy ra khi kết nối với server!'
        });
      });
    } else {
      console.log('Form không hợp lệ');
    }
  }

  uploadFileModel: UploadFileModel;
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
