import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from '../dashboard.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  imports: [NativeScriptCommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule {}
