import { Component, OnInit } from '@angular/core';

import { USERS } from '../../../app-shared/mock-files/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  Users = [];

  constructor() {}

  ngOnInit() {
    this.Users = USERS;
    console.log('Users Initialized');
  }
}
