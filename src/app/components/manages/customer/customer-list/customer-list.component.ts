import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/api/models';
import { CustomerService } from 'src/app/api/services';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  listUsers: Array<{ fullname: string; email: string; address: string; phone: string }> = [];

  listCustomersDB: Array<Customer> = [];
  // listCustomersDBs = [] as Array<Customer>;
  // listCustomersDBss = [] as Customer[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.apiCustomerListCustomerGet$Json$Response().subscribe((rs) => {
      const response = rs.body;
      if (response.success == true) {
        this.listCustomersDB = response.data;
      } else {
        console.log('Lấy ds khách hàng thất bại!');
      }
    });

    
  }
  onEdit(): void {
    this.router.navigate(['/manages/customer/customer-edit']);
  }

  navigateToEditCustomer(customerId: number) {
    this.router.navigate(['/manages/customer/customer-edit', customerId]);
  }
}
