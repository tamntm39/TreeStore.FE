import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Đảm bảo import FormsModule
import { UserModule } from './user/user.module';
import { TreeModule } from './tree/tree.module';


const routes: Routes = [
  {
    path: 'user', // Đường dẫn chính cho user
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) },
  {
    path: 'tree', // Đường dẫn chính cho user
    loadChildren: () => import('./tree/tree.module').then((m) => m.TreeModule)
  },
  {
    path: 'review', // Đường dẫn chính cho user
    loadChildren: () => import('./review/review.module').then((m) => m.ReviewModule)
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    UserModule, // Import UserModule ở đây
    TreeModule
  ]
})
export class ManagesModule {}
