import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'safe-traversal',
  templateUrl: './safe-traversal.component.html',
  styleUrls: ['./safe-traversal.component.css']
})
export class SafeTraversalComponent implements OnInit {

  task = {
    title: 'Task Title',
    assignee: {
      name: 'Tanish'
    }
    // assignee: null;
  };

  constructor() { }

  ngOnInit() {
  }

}
