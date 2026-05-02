import { MySuperService } from './../services/mySuperService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor(private mySuperService: MySuperService) { }

  ngOnInit() {
    console.log(this.mySuperService.sidenav);
  }

}
