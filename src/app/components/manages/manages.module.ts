import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  { path: 'customer', 
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ManagesModule {}
