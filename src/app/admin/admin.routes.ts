import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin-layout/admin-layout').then(c => c.AdminLayout),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then(c => c.Dashboard),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./users/users').then(c => c.Users),
      },
    ],
  },
];