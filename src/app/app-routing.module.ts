// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { AuthGuard } from './auth/helpers';

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
        redirectTo: '/manages', // Điều hướng đến '/manages' nếu truy cập vào '/'
        pathMatch: 'full'
      },
      { 
        path: 'manages', 
        loadChildren: () => import('./components/manages/manages.module').then((m) => m.ManagesModule),
        canActivate: [AuthGuard],
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
        path: 'not-authorized',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
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
