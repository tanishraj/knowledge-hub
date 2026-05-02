import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  // Course Details Property Binding
	private physics: number = 101;
	private chemistry: number = 102;
	private mathematics: number = 103;
	private hindi: number = 104;
	private english: number = 105;
}
