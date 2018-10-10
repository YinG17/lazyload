import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { postsRoutes } from '../posts-shared/posts-route';

@NgModule({
  imports: [NativeScriptRouterModule.forChild(postsRoutes)],
  exports: [NativeScriptRouterModule]
})
export class PostsRoutingModule {}
