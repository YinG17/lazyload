import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { usersRoutes } from '../users-shared/users-route';

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
