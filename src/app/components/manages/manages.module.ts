import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Đảm bảo import FormsModule
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { CategoryModule } from './category/category.module';

const routes: Routes = [
  {
    path: 'user', // Đường dẫn chính cho user
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  { path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) 
  },
  { path: 'category', 
    loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule) 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    UserModule, // Import UserModule ở đây
    CustomerModule,
    CategoryModule
  ]
})
export class ManagesModule {}
