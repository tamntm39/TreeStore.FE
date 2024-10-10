import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-add',
  templateUrl: './tree-add.component.html',
  styleUrls: ['./tree-add.component.scss']
})
export class TreeAddComponent {
  tree = {
    type: '',     
    name: '',
    quantity: 0,
    price: 0,
    image: null
  };

  successMessage: string = ''; // Biến để lưu thông báo thành công

  constructor(private router: Router) {}

  onSubmit() {
    // Logic thêm cây
    console.log('Thêm cây:', this.tree);

    // Thiết lập thông báo thành công
    this.successMessage = 'Đã thêm cây thành công!'; 

    // Reset thông báo sau 3 giây
    setTimeout(() => {
      this.successMessage = ''; // Đặt lại thông báo
      this.router.navigate(['/manages/tree/tree-list']); // Điều hướng về danh sách
    }, 3000);
  }

  cancel() {
    console.log('Hủy đã được nhấn');
    this.router.navigate(['/manages/tree/tree-list']); // Quay lại danh sách cây khi nhấn hủy
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Xử lý file tải lên
      this.tree.image = file;
      console.log('File hình ảnh đã chọn:', file);
    }
  }
}
