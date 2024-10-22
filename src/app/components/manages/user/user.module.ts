import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '', // Nếu không có phần nào được cung cấp, chuyển hướng đến '/user-list'
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent
  }
];

@NgModule({
  declarations: [UserListComponent, UserAddComponent, UserEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, // Nhập khẩu FormsModule
    ReactiveFormsModule 
  ]
})
export class UserModule {}