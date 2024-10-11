import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent {
  listTrees = [
    // Dữ liệu mẫu, bạn có thể thay thế bằng dữ liệu thực từ API
    { id: 1, name: 'Cây Bàng', quantity: 10, price: 500, type: 'Cây cảnh', image: '../../../../assets/images/image-tree/tree1.png' },
    { id: 2, name: 'Cây Xương Rồng', quantity: 5, price: 300, type: 'Cây cảnh', image: '../../../../assets/images/image-tree/trucnhatphuquy.png' }
  ];


  constructor(private router: Router) {}

  navigateToAddTree() {
    console.log('Navigating to Add Tree');
    this.router.navigate(['/manages/tree/tree-add']);
  }

  navigateToEditTree(treeId: number) {
    console.log('Navigating to Edit Tree');
    this.router.navigate(['/manages/tree/tree-edit', treeId]); // Đường dẫn đến trang sửa cây
  }

  deleteTree(treeId: number) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa cây này không?');
    if (confirmDelete) {
      this.listTrees = this.listTrees.filter(tree => tree.id !== treeId);
      console.log(`Xóa cây có ID: ${treeId}`);
    }
  }


}
