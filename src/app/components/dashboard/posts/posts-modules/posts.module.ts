import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from '../posts.component';
import { CommentsComponent } from '../comments/comments.component';

@NgModule({
  declarations: [PostsComponent, CommentsComponent],
  imports: [CommonModule, PostsRoutingModule]
})
export class PostsModule {}
