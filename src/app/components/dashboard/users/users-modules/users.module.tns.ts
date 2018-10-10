import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from '../users.component';
// import { AlbumsComponent } from '../albums/albums.component';
import { TodosComponent } from '../todos/todos.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  imports: [NativeScriptCommonModule, UsersRoutingModule],
  declarations: [UsersComponent, TodosComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UsersModule {}
