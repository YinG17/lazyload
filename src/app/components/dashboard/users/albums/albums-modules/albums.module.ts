import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from '../albums.component';
import { PhotosComponent } from '../photos/photos.component';

@NgModule({
  imports: [CommonModule, AlbumsRoutingModule],
  declarations: [AlbumsComponent, PhotosComponent]
})
export class AlbumsModule {}
