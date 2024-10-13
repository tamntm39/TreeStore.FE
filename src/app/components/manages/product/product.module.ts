import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component'; // Thêm TreeEditComponent
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-add',
    component: ProductAddComponent
  },
  {
    path: 'product-edit/:id', // Thêm route cho TreeEditComponent
    component: ProductEditComponent
  }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent // Khai báo TreeEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, // Nhập khẩu FormsModule để sử dụng các tính năng như ngModel
    ReactiveFormsModule
  ]
})
export class ProductModule {}
