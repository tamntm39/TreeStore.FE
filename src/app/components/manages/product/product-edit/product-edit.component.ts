import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    quantity: 0,
    price: 0,
    image: null
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Lấy ID cây từ route
    this.productId = +this.route.snapshot.paramMap.get('id')!;

    // Gọi API hoặc dịch vụ để lấy thông tin cây bằng ID
    this.getProductById(this.productId);
  }

  getProductById(treeId: number) {
    // Logic để lấy thông tin cây
    // Giả sử bạn có một dịch vụ gọi là treeService
    // this.treeService.getTreeById(treeId).subscribe(tree => this.tree = tree);

    // Dữ liệu mẫu
    this.product = { 
      name: 'Cây bàng', 
      type: 'Cây bóng mát', 
      quantity: 10, 
      price: 50000, 
      image: null
    };
  }

  onSubmit() {
    // Logic cập nhật thông tin cây
    console.log('Cập nhật thông tin cây:', this.product);
    // Sau khi cập nhật, điều hướng về danh sách cây
    this.router.navigate(['/manages/product/product-list']);
  }

  cancel() {
    this.router.navigate(['/manages/product/product-list']); // Quay lại danh sách cây khi nhấn hủy
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
