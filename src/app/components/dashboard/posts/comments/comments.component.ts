import { Component, OnInit, Input } from '@angular/core';
import { COMMENTS } from '../../../../app-shared/mock-files/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input()
  id: number;

  Comments = [];

  constructor() {}

  ngOnInit() {
    this.Comments = COMMENTS;
  }
}
