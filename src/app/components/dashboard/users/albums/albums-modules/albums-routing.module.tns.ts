import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { albumsRoutes } from '../albums-shared/albums-route';

@NgModule({
  imports: [NativeScriptRouterModule.forChild(albumsRoutes)],
  exports: [NativeScriptRouterModule]
})
export class AlbumsRoutingModule {}
