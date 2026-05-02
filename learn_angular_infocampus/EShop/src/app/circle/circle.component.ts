import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {

  private radius: string;

	calculateArea(){
		alert('Area of circle is = ' + (3.14 * parseInt(this.radius) * parseInt(this.radius)));
  }
  
  calculateCircum(){
		alert('Area of circle is = ' + (2 * 3.14 * parseInt(this.radius)));
	}

}
