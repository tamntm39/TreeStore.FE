import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tree-edit',
  templateUrl: './tree-edit.component.html',
  styleUrls: ['./tree-edit.component.scss']
})
export class TreeEditComponent implements OnInit {
  treeId: number;
  tree = {
    name: '',
    type: '',
    quantity: 0,
    price: 0,
    image: null
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Lấy ID cây từ route
    this.treeId = +this.route.snapshot.paramMap.get('id')!;

    // Gọi API hoặc dịch vụ để lấy thông tin cây bằng ID
    this.getTreeById(this.treeId);
  }

  getTreeById(treeId: number) {
    // Logic để lấy thông tin cây
    // Giả sử bạn có một dịch vụ gọi là treeService
    // this.treeService.getTreeById(treeId).subscribe(tree => this.tree = tree);

    // Dữ liệu mẫu
    this.tree = { 
      name: 'Cây bàng', 
      type: 'Cây bóng mát', 
      quantity: 10, 
      price: 50000, 
      image: null
    };
  }

  onSubmit() {
    // Logic cập nhật thông tin cây
    console.log('Cập nhật thông tin cây:', this.tree);
    // Sau khi cập nhật, điều hướng về danh sách cây
    this.router.navigate(['/manages/tree/tree-list']);
  }

  cancel() {
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
