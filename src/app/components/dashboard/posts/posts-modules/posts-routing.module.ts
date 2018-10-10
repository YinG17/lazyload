import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { postsRoutes } from '../posts-shared/posts-route';

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
