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

  reviews = [
    // Dữ liệu mẫu cho đánh giá
    { id: 1, treeId: 1, user: 'tamtm', rating: 5, comment: 'Cây rất đẹp!' },
    { id: 2, treeId: 1, user: 'Bảo Khang mập địch', rating: 4, comment: 'Cây rất khỏe!' },
    { id: 3, treeId: 2, user: 'Kweennulo', rating: 3, comment: 'Cần chăm sóc nhiều hơn!' }
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

  viewReviews(treeId: number) {
    const treeReviews = this.reviews.filter(review => review.treeId === treeId);
    console.log('Đánh giá cho cây:', treeReviews);
    const modal = document.getElementById('reviewsModal');
    if (modal) {
      modal.style.display = 'block'; // Hiển thị modal
      this.reviews = treeReviews; // Lưu đánh giá của cây vào mảng reviews
    }
  }

  closeModal() {
    const modal = document.getElementById('reviewsModal');
    if (modal) {
      modal.style.display = 'none'; // Ẩn modal
    }
  }

  deleteReview(reviewId: number) {
    this.reviews = this.reviews.filter(review => review.id !== reviewId);
    console.log('Đã xóa đánh giá có id:', reviewId);
  }
}
