import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApexOptions } from 'ng-apexcharts';
import { OrderService } from 'src/app/api/services';
import { ProductService } from 'src/app/api/services';
import { CustomerService } from 'src/app/api/services';

import { ReviewService } from 'src/app/api/services';


@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueChartComponent implements OnInit {
  @ViewChild('chart') chart!: any; // Reference to the chart component
  public chartOptions: ApexOptions = {}; // Chart options
  public revenues: any[] = []; // Data for the chart
  public totalRevenue: number = 0; // Tổng doanh thu tính được
 
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private customerService: CustomerService,
    private reviewService: ReviewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderService.apiOrderGetRevenueLast7DaysGet$Json$Response().subscribe((response) => {
      if (response && response.status === 200) {
        // Giả sử response.body đã là đối tượng JSON rồi, không cần parse
        this.revenues = response.body?.data || []; // Truy cập data trực tiếp từ response body
        this.totalRevenue = this.revenues.reduce((total, revenue) => {
          return total + revenue.totalRevenue; // Cộng tổng doanh thu
        }, 0);
        this.setupChart();
      } else {
        console.error('No data or error occurred in the response');
      }
    });

    this.loadTotalOrders();
    this.loadTotalProducts();
    this.loadCustomerOrders();
    this.loadReviewOrders();

  }

  AnalyticEcommerce = [
    {
      title: 'Tổng đơn hàng',
      amount: '4,42,236',
      background: 'bg-success',
      border: 'border-success',
      icon: 'bi-bag-check',
      color: 'text-success',
      number: '' // Placeholder for dynamic value
    },
    {
      title: 'Tổng sản phẩm',
      amount: '4,42,236',
      background: 'bg-warning',
      border: 'border-warning',
      icon: 'bi-box',
      color: 'text-warning',
      number: '' // Placeholder for dynamic value
    },
    {
      title: 'Tổng khách hàng',
      amount: '4,42,236',
      background: 'bg-info',
      border: 'border-info',
      icon: 'bi-person-fill',
      color: 'text-info',
      number: '' // Placeholder for dynamic value
    },
    {
      title: 'Tổng đánh giá',
      amount: '4,42,236',
      background: 'bg-danger',
      border: 'border-danger',
      icon: 'bi-star-fill',
      color: 'text-danger',
      number: '' // Placeholder for dynamic value
    }
  ];
  
  
  loadTotalOrders(): void {
    this.orderService.apiOrderGetTotalOrdersTotalOrdersGet$Json$Response().subscribe(
      (response: any) => {
        const totalOrders = response?.body?.data || 0; // Sử dụng 0 làm giá trị mặc định
  
        this.AnalyticEcommerce = this.AnalyticEcommerce.map(item => {
          if (item.title === 'Tổng đơn hàng') {
            return {
              ...item,
              number: totalOrders // Cập nhật giá trị
            };
          }
          return item;
        });
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    );
  }
  
  loadTotalProducts(): void {
    this.productService.apiProductGetTotalProductsTotalProductsGet$Json$Response().subscribe(
      (response: any) => {
        const totalProducts = response?.body?.data || 0;
  
        this.AnalyticEcommerce = this.AnalyticEcommerce.map(item => {
          if (item.title === 'Tổng sản phẩm') {
            return {
              ...item,
              number: totalProducts
            };
          }
          return item;
        });
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    );
  }
  
  loadCustomerOrders(): void {
    this.customerService.apiCustomerGetTotalCustomersTotalCustomerGet$Json$Response().subscribe(
      (response: any) => {
        const totalCustomers = response?.body?.data || 0;
  
        this.AnalyticEcommerce = this.AnalyticEcommerce.map(item => {
          if (item.title === 'Tổng khách hàng') {
            return {
              ...item,
              number: totalCustomers
            };
          }
          return item;
        });
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    );
  }
  
  loadReviewOrders(): void {
    this.reviewService.apiReviewGetTotalReviewsTotalReviewsGet$Json$Response().subscribe(
      (response: any) => {
        const totalReviews = response?.body?.data || 0;
  
        this.AnalyticEcommerce = this.AnalyticEcommerce.map(item => {
          if (item.title === 'Tổng đánh giá') {
            return {
              ...item,
              number: totalReviews
            };
          }
          return item;
        });
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    );
  }
  
  setupChart(): void {
    // If revenues data is available, prepare the chart options
    if (this.revenues.length > 0) {
      const dates = this.revenues.map((r) => r.date); // Get the dates for the x-axis
      const totalRevenue = this.revenues.map((r) => r.totalRevenue); // Get the revenue values for the y-axis

      // Set up the chart options
      this.chartOptions = {
        chart: {
          type: 'line', // Set chart type to line
          height: 350, // Set chart height
          toolbar: {
            show: false // Hide toolbar
          },
          background: 'transparent' // Set transparent background
        },
        plotOptions: {
          line: {
            // Remove curve if not valid in your version
          }
        },
        dataLabels: {
          enabled: false // Disable data labels
        },
        series: [
          {
            name: 'Doanh Thu', // Name of the series
            data: totalRevenue // Data for the series
          }
        ],
        stroke: {
          width: 3, // Set the stroke width for the line
          curve: 'smooth' // Smooth curve (you may try removing this if it causes an issue)
        },
        xaxis: {
          categories: dates, // Dates for the x-axis
          title: {
            text: 'Ngày' // X-axis title
          },
          labels: {
            style: {
              colors: ['#8c8c8c'] // Color for x-axis labels
            }
          }
        },
        yaxis: {
          title: {
            text: 'Doanh Thu (VND)' // Y-axis title
          }
        },
        colors: ['#5cdbd3'], // Set chart line color
        grid: {
          show: true, // Show grid lines
          borderColor: '#e1e1e1' // Set grid border color
        },
        tooltip: {
          theme: 'light', // Set tooltip theme
          x: {
            show: true // Show x-axis value on hover
          },
          y: {
            formatter: (val: number) => `${val} VND` // Format the y-axis tooltip value with VND
          }
        }
      };
    }
  }
}
