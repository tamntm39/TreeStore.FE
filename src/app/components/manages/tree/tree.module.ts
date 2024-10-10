import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TreeListComponent } from './tree-list/tree-list.component';
import { TreeAddComponent } from './tree-add/tree-add.component';
import { TreeEditComponent } from './tree-edit/tree-edit.component';  // Thêm TreeEditComponent
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'tree-list',
    component: TreeListComponent
  },
  {
    path: 'tree-add',
    component: TreeAddComponent
  },
  {
    path: 'tree-edit/:id',  // Thêm route cho TreeEditComponent
    component: TreeEditComponent
  }
];

@NgModule({
  declarations: [
    TreeListComponent,
    TreeAddComponent,
    TreeEditComponent  // Khai báo TreeEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule  // Nhập khẩu FormsModule để sử dụng các tính năng như ngModel
  ]
})
export class TreeModule {}
