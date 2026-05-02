import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pe-pipes',
  templateUrl: './pe-pipes.component.html',
  styleUrls: ['./pe-pipes.component.scss']
})
export class PePipesComponent implements OnInit {

  private mass: number = 120;
  private height: number = 10;

  constructor() { }

  ngOnInit() {

  }

}
