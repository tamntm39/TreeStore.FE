import { Component, OnInit } from '@angular/core';
import { GetListProductSpResult } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventoryItems: GetListProductSpResult[] = [];
  searchTerm: string = '';
  private _rootUrl?: string;

  constructor(
    private productService: ProductService,
    protected config: ApiConfiguration
  ) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  loadInventory(): void {
    this.productService.apiProductListProductGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.inventoryItems = response.data;
      } else {
        console.log('Lấy dữ liệu danh sách hàng tồn kho thất bại');
      }
    });
  }

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.loadInventory();
      return;
    }

    this.inventoryItems = this.inventoryItems.filter(item =>
      item.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteInventoryItem(productId: number): void {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: 'Bạn có chắc chắn muốn xóa sản phẩm này khỏi kho?',
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
            Swal.fire('Đã xóa!', 'Sản phẩm đã được xóa khỏi kho.', 'success').then(() => {
              this.loadInventory();
            });
          } else {
            Swal.fire('Lỗi!', 'Xóa sản phẩm không thành công.', 'error');
          }
        });
      }
    });
  }
}
