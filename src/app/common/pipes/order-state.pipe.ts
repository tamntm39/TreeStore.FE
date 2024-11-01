import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderState'
})
export class OrderStatePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Đang chờ';
      case 1:
        return 'Đang xử lý';
      case 2:
        return 'Chuyển hàng cho vận chuyển';
      case 3:
        return 'Đã giao hàng';
      case 4:
        return 'Đã hủy';
      default:
        return 'Không xác định';
    }
  }
}
