import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Đảm bảo import FormsModule
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';


const routes: Routes = [
  {
    path: '', // Nếu không có phần nào được cung cấp, chuyển hướng đến '/user'
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user', // Đường dẫn chính cho user
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  { path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) 
  },
  { path: 'category', 
    loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule) 
  },
  {
    path: 'product', // Đường dẫn chính cho user
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
  },
  {
    path: 'review', // Đường dẫn chính cho user
    loadChildren: () => import('./review/review.module').then((m) => m.ReviewModule)
  },
  {
    path: 'inventory', // Đường dẫn chính cho user
    loadChildren: () => import('./inventory/inventory.module').then((m) => m.InventoryModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule, 
    UserModule, // Import UserModule ở đây
    CustomerModule,
    CategoryModule,
    ProductModule,
    InventoryModule
  ]
})
export class ManagesModule {}