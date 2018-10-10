import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';

import { AlbumsComponent } from '../albums.component';
import { PhotosComponent } from '../photos/photos.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  imports: [NativeScriptCommonModule, AlbumsRoutingModule],
  declarations: [AlbumsComponent, PhotosComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AlbumsModule {}
