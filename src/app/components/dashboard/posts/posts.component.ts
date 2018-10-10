import { Component, OnInit } from '@angular/core';

import { POSTS } from '../../../app-shared/mock-files/posts';

// import { USERS } from '../../../app-shared/mock-files/users';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  Posts = [];
  constructor() {}

  ngOnInit() {
    this.Posts = POSTS;
    console.log('Posts Initialized!');
  }
}
