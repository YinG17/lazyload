import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { albumsRoutes } from '../albums-shared/albums-route';

@NgModule({
  imports: [RouterModule.forChild(albumsRoutes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {}
