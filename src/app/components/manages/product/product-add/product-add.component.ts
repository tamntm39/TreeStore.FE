import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product = {
    type: '',
    name: '',
    quantity: 0,
    price: 0,
    image: null
  };

  successMessage: string = ''; // Biến để lưu thông báo thành công

  constructor(private router: Router) {}

  onSubmit() {
    // Logic thêm sản phẩm
    console.log('Thêm sản phẩm:', this.product);

    // Thiết lập thông báo thành công
    this.successMessage = 'Đã thêm sản phẩm thành công!'; 

    // Reset thông báo sau 3 giây
    setTimeout(() => {
      this.successMessage = ''; // Đặt lại thông báo
      this.router.navigate(['/manages/product/product-list']); // Điều hướng về danh sách sản phẩm
    }, 3000);
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
