import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { Order } from 'src/app/api/models';
import { OrderService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent implements OnInit {
  orderId: number;
  customerName: string;
  address: string;
  stateId: number;
  orderDetails: any[] = []; // Chứa thông tin sản phẩm

  constructor(
    private router: Router,
    private orderService: OrderService,
    protected config: ApiConfiguration
  ) {}

  ngOnInit() {
    const url = this.router.url;
    const orderIdStr = url.split('/').pop(); // Lấy phần cuối cùng của URL
    this.orderId = Number(orderIdStr); // Chuyển đổi sang kiểu số

    this.loadOrderDetails();
  }

  loadOrderDetails() {
    const newLocal = this;
    newLocal.orderService.apiOrderListDetailOrderGet$Json$Response({ orderId: this.orderId }).subscribe(
      (response) => {
        // Giả sử response.body.data là nơi chứa danh sách sản phẩm
        this.orderDetails = response.body?.data.detailProducts || [];
        this.customerName = response.body.data.nameCustomer;
        this.address = response.body.data.address;
        this.stateId = response.body.data.stateId;
      },
      (error) => {
        console.error('Failed to load order details', error);
      }
    );
  }
  private _rootUrl?: string;

  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }
  cancel() {
    this.router.navigate(['/manages/order/order-list']); // Quay lại danh sách người dùng khi nhấn hủy
  }
  duyet() {
    this.orderService.apiOrderChangeStateOrderPost$Json$Response({ orderId: this.orderId, stateId: 1 }).subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
      } else {
        console.log('Lấy dữ liệu danh sách đơn hàng thất bại');
      }
    });
  }
  huy() {
    this.orderService.apiOrderChangeStateOrderPost$Json$Response({ orderId: this.orderId, stateId: 4 }).subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
      } else {
        console.log('Lấy dữ liệu danh sách đơn hàng thất bại');
      }
    });
  }

  changeStateOrder(stateId: number) {
    let actionText = '';
    switch (stateId) {
      case 1:
        actionText = 'Duyệt';
        break;
      case 2:
        actionText = 'Chuyển hàng cho shipper';
        break;
      case 3:
        actionText = 'Hoàn thành';
        break;
      case 4:
        actionText = 'Hủy đơn hàng';
        break;
      default:
        actionText = 'Xử lý';
        break;
    }

    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: `Bạn có muốn ${actionText} đơn hàng này không?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Thực hiện!',
      cancelButtonText: 'Hủy bỏ'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.apiOrderChangeStateOrderPost$Json$Response({ orderId: this.orderId, stateId: stateId }).subscribe((rs) => {
          const response = rs.body;
          if (response.success) {
            Swal.fire('Cập nhật!', `Đã ${actionText} đơn hàng thành công thành trạng thái .`, 'success').then(() => {
              // this.loadProducts();
              window.location.reload();
            });
          } else {
            Swal.fire('Cập nhật thất bại!', response.message, 'error');
          }
        });
      }
    });
  }
}
