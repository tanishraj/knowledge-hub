import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-pipe',
  templateUrl: './array-pipe.component.html',
  styleUrls: ['./array-pipe.component.scss']
})
export class ArrayPipeComponent implements OnInit {

  private users:any[] = ['Tanish', 'Ajay', 'Sachin', 'Nilay', 'Rohit'];

  constructor() { }

  ngOnInit() {
  }

}
