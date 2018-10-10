import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { dashboardRoutes } from '../dashboard-shared/dashboard-route';

@NgModule({
  imports: [NativeScriptRouterModule.forChild(dashboardRoutes)],
  exports: [NativeScriptRouterModule]
})
export class DashboardRoutingModule {}
