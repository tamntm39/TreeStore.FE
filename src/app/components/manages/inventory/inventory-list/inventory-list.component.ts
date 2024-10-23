import { Component, OnInit } from '@angular/core';
import { GetListProductSpResult } from 'src/app/api/models'; // Đảm bảo bạn đã nhập đúng mô hình Product
import { ProductService } from 'src/app/api/services'; // Sử dụng ProductService
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventoryItems: GetListProductSpResult[] = []; // Danh sách sản phẩm
  filteredItems: GetListProductSpResult[] = []; // Danh sách đã lọc
  searchTerm: string = ''; // Từ tìm kiếm

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.productService.apiProductListProductGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.inventoryItems = response.data; // Cập nhật danh sách sản phẩm
        this.filteredItems = this.inventoryItems; // Khởi tạo danh sách đã lọc
      } else {
        console.log('Lấy dữ liệu danh sách sản phẩm thất bại');
      }
    });
  }

  searchProducts(): void {
    const normalizedSearchTerm = this.searchTerm.toLowerCase().trim();
    this.filteredItems = this.inventoryItems.filter(item =>
      item.productName.toLowerCase().includes(normalizedSearchTerm)
    );

    if (this.filteredItems.length === 0) {
      Swal.fire('Không tìm thấy', 'Không có sản phẩm nào khớp với từ tìm kiếm.', 'info');
    }
  }
}
