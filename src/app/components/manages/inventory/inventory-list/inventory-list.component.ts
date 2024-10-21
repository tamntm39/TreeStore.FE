import { Component, OnInit } from '@angular/core';
import { GetListProductSpResult } from 'src/app/api/models'; // Đảm bảo bạn đã nhập đúng mô hình Product
import { ProductService } from 'src/app/api/services'; // Sử dụng ProductService

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventoryItems: GetListProductSpResult[] = []; // Danh sách sản phẩm

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.productService.apiProductListProductGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.inventoryItems = response.data; // Cập nhật danh sách sản phẩm
      } else {
        console.log('Lấy dữ liệu danh sách sản phẩm thất bại');
      }
    });
  }
}
