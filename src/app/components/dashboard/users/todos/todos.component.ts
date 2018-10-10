import { Component, OnInit } from '@angular/core';

import { TODOS } from '../../../../app-shared/mock-files/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  Todos = [];
  constructor() {}

  ngOnInit() {
    this.Todos = TODOS;
    console.log('Todos Initialized!');
  }
}
