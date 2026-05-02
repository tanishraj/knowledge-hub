import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  categorties = [
    {'id': 1, 'name':'Web Development'},
    {'id': 2, 'name':'Java Development'},
    {'id': 3, 'name':'.Net Development'},
    {'id': 4, 'name':'Python Development'},
    {'id': 5, 'name':'Wordpress Development'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
