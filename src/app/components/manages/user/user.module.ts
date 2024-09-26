import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent
  }
];
@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class UserModule {}
