import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-addition',
	templateUrl: './addition.component.html',
	styleUrls: ['./addition.component.scss']
})
export class AdditionComponent {
	private a:string;
	private b:string;

	addNums(){
		return parseInt(this.a) + parseInt(this.b);
	}
}
