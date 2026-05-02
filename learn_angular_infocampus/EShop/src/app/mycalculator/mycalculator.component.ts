import { calculatorService } from './../services/calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mycalculator',
	templateUrl: './mycalculator.component.html',
	styleUrls: ['./mycalculator.component.scss']
})
export class MycalculatorComponent implements OnInit {

	private a: string;
	private b: string;

	constructor(private calc: calculatorService) { 
		
	}

	addNums(){
		let t1 = parseInt(this.a);
		let t2 = parseInt(this.b);

		alert(this.calc.addition(t1, t2));
	}

	subNums(){
		let t1 = parseInt(this.a);
		let t2 = parseInt(this.b);

		alert(this.calc.subtract(t1, t2));
	}

	ngOnInit() {
	}

}
