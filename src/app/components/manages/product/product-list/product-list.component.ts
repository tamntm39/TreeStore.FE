import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetListProductSpResult, ProductListResultCustomModel } from 'src/app/api/models'; // Đảm bảo bạn có mô hình Product
import { ProductService } from 'src/app/api/services'; // Đảm bảo bạn đã nhập đúng ProductService
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listProducts: GetListProductSpResult[] = []; // Danh sách sản phẩm
  searchTerm: string = '';

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Tải danh sách sản phẩm
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

  // Chuyển trạng thái sản phẩm
  toggleProductActiveStatus(product: GetListProductSpResult) {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: `Bạn có muốn chuyển trạng thái sản phẩm này thành ${product.isActive ? 'vô hiệu khóa' : 'kích hoạt'}.`,
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
              `Đã cập nhật thành công thành trạng thái ${product.isActive ? 'Vô hiệu khóa' : 'Kích hoạt'}.`,
              'success'
            ).then(() => {
              this.loadProducts();
            });
          } else {
            Swal.fire('Cập nhật thất bại!', response.message, 'error');
          }
        });
      }
    });
  }

  // Điều hướng đến trang thêm sản phẩm
  navigateToAddProduct() {
    this.router.navigate(['/manages/product/product-add']); // Đường dẫn đến trang thêm sản phẩm
  }

  // Điều hướng đến trang chỉnh sửa sản phẩm
  navigateToEditProduct(productId: number) {
    this.router.navigate(['/manages/product/product-edit', productId]); // Đường dẫn đến trang chỉnh sửa sản phẩm
  }

  // Xóa sản phẩm
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

  // Tìm kiếm sản phẩm theo tên
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      // Nếu không có từ khóa tìm kiếm, tải lại toàn bộ sản phẩm
      this.loadProducts();
      return;
    }

    // Gọi API tìm kiếm sản phẩm
    this.productService.apiProductSearchByNameGet$Json({ name: this.searchTerm }).subscribe((response: ProductListResultCustomModel) => {
      if (response.success) {
        this.listProducts = response.data || []; // Cập nhật danh sách sản phẩm
        // Kiểm tra xem có sản phẩm nào không
        if (this.listProducts.length === 0) {
          Swal.fire('Không tìm thấy sản phẩm!', 'Không có sản phẩm nào khớp với tìm kiếm của bạn.', 'info');
        }
      } else {
        console.log('Không tìm thấy sản phẩm');
        this.listProducts = []; // Xóa danh sách nếu không tìm thấy
        Swal.fire('Không tìm thấy sản phẩm!', 'Không có sản phẩm nào khớp với tìm kiếm của bạn.', 'info');
      }
    }, (error) => {
      console.error('Lỗi khi tìm kiếm sản phẩm', error);
      this.listProducts = []; // Đặt danh sách rỗng nếu có lỗi
    });
  }
}
