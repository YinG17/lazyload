import { Component, OnInit } from '@angular/core';
import { ALBUMS } from '../../../../app-shared/mock-files/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  Albums = [];
  constructor() {}

  ngOnInit() {
    this.Albums = ALBUMS;
    console.log('Albums Initialized!');
  }
}
