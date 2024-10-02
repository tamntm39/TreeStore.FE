// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { UserAddComponent } from './components/manages/user/user-add/user-add.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: '/dashboard/default',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      { 
        path: 'manages', 
        loadChildren: () => import('./components/manages/manages.module').then((m) => m.ManagesModule) 
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      },
      {
        path: 'user-add', // Đường dẫn mới cho trang thêm người dùng
        component: UserAddComponent // Component hiển thị trang thêm người dùng
      },
      {
        path: 'user-edit', // Đường dẫn mới cho trang thêm người dùng
        component: UserAddComponent // Component hiển thị trang thêm người dùng
      },
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./components/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./components/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
