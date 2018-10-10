import { Component, OnInit } from '@angular/core';

import { PHOTOS } from '../../../../../app-shared/mock-files/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  Photos = [];

  constructor() {}

  ngOnInit() {
    this.Photos = PHOTOS;
  }
}
