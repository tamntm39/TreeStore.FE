import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

const routes: Routes = [
  {
    path: 'category-list',
    component: CategoryListComponent
  },
  {
    path: 'category-edit',
    component: CategoryEditComponent
  }
];

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }

