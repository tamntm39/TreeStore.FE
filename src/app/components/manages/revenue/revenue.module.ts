import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RevenueChartComponent } from './revenue.component';  // Đảm bảo rằng bạn nhập đúng tên class của component
import { NgApexchartsModule } from 'ng-apexcharts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [RevenueChartComponent],  // Đảm bảo khai báo đúng class trong declarations
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RevenueChartComponent }]),
    NgApexchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Thêm dòng này

})
export class RevenueModule {}
