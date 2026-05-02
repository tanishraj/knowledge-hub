import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  isRated: boolean;

  toggleStar() {
    this.isRated = !this.isRated;
  }

  constructor() { }

  ngOnInit() {
  }

}
