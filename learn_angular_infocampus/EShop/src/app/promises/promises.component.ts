import { PromiseService } from './../services/promise.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-promises',
	templateUrl: './promises.component.html',
	styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {
	
	constructor(private promiseService: PromiseService) {
	}

	ngOnInit() {
		// Get all the list of users
		this.promiseService.getUsers();

		let result = this.promiseService.add(2, 3).then(function (res) {
			console.log("The Addition of 2 and 3 is =" + res);
		}).catch(function (err) {
			console.log("Something went wrong", err);
		})
	}

}
