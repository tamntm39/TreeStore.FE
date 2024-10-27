import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Thêm dòng này
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewAddComponent } from './review-add/review-add.component';

const routes: Routes = [
  { path: '' ,
    redirectTo:'review-list',
    pathMatch:'full'
   },
{
  path:'review-list',
  component:ReviewListComponent
},
{
  path:'review-add',
  component:ReviewAddComponent
}

  // Đảm bảo path đúng
];

@NgModule({
  declarations: [
    ReviewListComponent,
    ReviewAddComponent // Thêm dòng này
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Thêm dòng này để sử dụng formGroup
    RouterModule.forChild(routes) // Khai báo routing
    
  ]
})
export class ReviewModule { }
