import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Đảm bảo import FormsModule
import { UserModule } from './user/user.module';


const routes: Routes = [
  {
    path: 'user', // Đường dẫn chính cho user
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    UserModule  // Import UserModule ở đây
  ],
})
export class ManagesModule {}