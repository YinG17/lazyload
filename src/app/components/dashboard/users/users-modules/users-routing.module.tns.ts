import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { usersRoutes } from '../users-shared/users-route';

@NgModule({
  imports: [NativeScriptRouterModule.forChild(usersRoutes)],
  exports: [NativeScriptRouterModule]
})
export class UsersRoutingModule {}
