import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { OrderReponse, Order } from 'src/app/api/models'; // Đảm bảo bạn có mô hình Product
import { OrderService } from 'src/app/api/services'; // Đảm bảo bạn đã nhập đúng OrderService
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  listOrders: OrderReponse[] ; // Đảm bảo listOrders là một mảng các đơn hàng

  constructor(
    private router: Router,
    private orderService: OrderService,
    protected config: ApiConfiguration,
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  } 

 
  loadOrders(): void {
    this.orderService.apiOrderListOrderGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success) {
        this.listOrders = response.data; // Cập nhật danh sách đơn hàng
      } else {
        console.log('Lấy dữ liệu danh sách đơn hàng thất bại');
      }
    });
  }

 

 
 
}
