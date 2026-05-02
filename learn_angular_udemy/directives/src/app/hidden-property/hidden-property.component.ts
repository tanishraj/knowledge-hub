import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hidden-property',
  templateUrl: './hidden-property.component.html',
  styleUrls: ['./hidden-property.component.css']
})
export class HiddenPropertyComponent {
  courses = ["Course 1", "Course 2", "Course 3"];
  // courses = [];
}
