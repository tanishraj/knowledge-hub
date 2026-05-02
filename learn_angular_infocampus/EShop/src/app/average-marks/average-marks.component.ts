import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-marks',
  templateUrl: './average-marks.component.html',
  styleUrls: ['./average-marks.component.scss']
})
export class AverageMarksComponent {
	private physics: string;
	private chemistry: string;
	private mathematics: string;
	private hindi: string;
	private english: string;

	calculateAverage(){
		alert('Average Score is = ' + ((parseInt(this.physics) + parseInt(this.chemistry) + parseInt(this.mathematics) + parseInt(this.hindi) + parseInt(this.english))/5) + '%');
	}
}
