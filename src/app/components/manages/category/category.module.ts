import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'category-list',
    component: CategoryListComponent
  },
  {
    path: 'category-add',
    component: CategoryEditComponent
  },
  {
    path: 'category-edit:/id',
    component: CategoryEditComponent
  }
];

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryEditComponent,
    CategoryAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(routes),
    ReactiveFormsModule 
  ]
})
export class CategoryModule { }