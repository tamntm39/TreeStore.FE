import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  }
  ,
  {
    path: 'user-edit',
    component: UserAddComponent
  }
];

@NgModule({
  declarations: [UserListComponent, UserAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule // Nhập khẩu FormsModule
  ]
})
export class UserModule {}
