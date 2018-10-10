import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from '../users.component';
import { TodosComponent } from '../todos/todos.component';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [UsersComponent, TodosComponent]
})
export class UsersModule {}
