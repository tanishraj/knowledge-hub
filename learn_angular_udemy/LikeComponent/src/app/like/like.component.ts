import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input ('likesCount') likesCount: number;
  @Input ('isActive') isActive: boolean;

  onClick(){
    this.isActive = !this.isActive;
    (this.isActive) ? ++this.likesCount : --this.likesCount;
  }

  constructor() { }

  ngOnInit() {
  }

}
