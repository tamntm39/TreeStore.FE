import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Thêm dòng này
import {  PromotionAddComponent } from './promotion-add/promotion-add.component';
import { PromotionEditComponent } from './promotion-edit/promotion-edit.component';


const routes: Routes = [
  { path: '',
    redirectTo:'promotion-list',
    pathMatch:'full'
   },
   {
    path:'promotion-list',
    component:PromotionListComponent
   },
   {
    path:'promotion-add',
    component:PromotionAddComponent
   },
   {
    path: 'promotion-edit/:promotionId', // Đảm bảo tham số promotionId ở đây
    component: PromotionEditComponent
   }
];

@NgModule({
  declarations: [
    PromotionListComponent,
    PromotionAddComponent,
    PromotionEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PromotionModule { }
