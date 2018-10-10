import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'users',
    loadChildren: '../users/users-modules/users.module#UsersModule'
  },
  {
    path: 'posts',
    loadChildren: '../posts/posts-modules/posts.module#PostsModule'
  }
];
