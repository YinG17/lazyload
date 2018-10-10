import { Routes } from '@angular/router';

import { UsersComponent } from '../users.component';
// import { AlbumsComponent } from '../albums/albums.component';
import { TodosComponent } from '../todos/todos.component';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'albums',
    loadChildren: '../albums/albums-modules/albums.module#AlbumsModule'
  },
  {
    path: 'todos',
    component: TodosComponent
  }
];
