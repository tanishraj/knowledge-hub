import { calculatorService } from './../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { triangleService } from '../services/triangle.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {
  private side1: string;
  private side2: string;
  private side3: string;
  
  constructor(private triangle: triangleService) { }

  calculateArea(){
    let s1 = parseFloat(this.side1);
    let s2 = parseFloat(this.side2);
    let s3 = parseFloat(this.side3);

    alert(this.triangle.areaOfTriangle(s1, s2, s3));
  }

  ngOnInit() {
  }

}
