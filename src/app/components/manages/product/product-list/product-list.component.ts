import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { GetListProductSpResult, Product } from 'src/app/api/models'; // Đảm bảo bạn có mô hình Product
import { ProductService } from 'src/app/api/services'; // Đảm bảo bạn đã nhập đúng ProductService
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listProducts: GetListProductSpResult[] = []; // Đảm bảo listProducts là một mảng các sản phẩm
  searchTerm:string=''

  constructor(
    private router: Router,
    private productService: ProductService,
    protected config: ApiConfiguration, 
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  } 
  private _rootUrl?: string;
 
  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }
  loadProducts(): void {
    this.productService.apiProductListProductGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.listProducts = response.data; // Cập nhật danh sách sản phẩm
      } else {
        console.log('Lấy dữ liệu danh sách sản phẩm thất bại');
      }
    });
  }

  toggleProductActiveStatus(product: Product) {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: `Bạn có muốn chuyển trạng thái người dùng này thành ${product.isActive ? 'vô hiệu khóa' : 'kích hoạt'}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Thực hiện!',
      cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.apiProductChangeActivePost$Json$Response({ productId: product.productId }).subscribe((rs) => {
          const response = rs.body;
          if (response.success) {
            Swal.fire(
              'Cập nhật!',
              `Đã cập nhật thành công thành trạng thái ${product.isActive ? 'Vô hiệu khóa' : 'Kích h'}.`,
              'success'
            ).then(() => {
              this.loadProducts();
              // window.location.reload();
            });
          } else {
            Swal.fire('Cập nhật thất bại!', response.message, 'error');
          }
        });
      }
    });
  }
  navigateToAddProduct() {
    console.log('Navigating to Add Product');
    this.router.navigate(['/manages/product/product-add']); // Đường dẫn đến trang thêm sản phẩm
  }

  navigateToEditProduct(productId: number) {
    this.router.navigate(['/manages/product/product-edit', productId]); // Đường dẫn đến trang chỉnh sửa sản phẩm
  }

  deleteProduct(productId: number) {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa nó!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.apiProductDeleteDelete$Json$Response({ productId }).subscribe((rs) => {
          const response = rs.body;
          if (response.success) {
            Swal.fire('Đã xóa!', 'Sản phẩm đã được xóa.', 'success').then(() => {
              this.loadProducts(); // Cập nhật lại danh sách sản phẩm
            });
          } else {
            Swal.fire('Lỗi!', 'Xóa sản phẩm không thành công.', 'error');
          }
        });
      }
    });
  }
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      // Nếu không có từ khóa tìm kiếm, tải lại toàn bộ sản phẩm
      this.loadProducts();
      return;
    }

    // Lọc danh sách sản phẩm theo tên sản phẩm
    this.listProducts = this.listProducts.filter(product =>
      product.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
