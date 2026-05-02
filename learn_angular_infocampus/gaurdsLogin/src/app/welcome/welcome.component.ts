import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

	private loginStatus = localStorage.getItem('status');

	constructor(private router : Router) { }

	ngOnInit() {
	}

	if(loginStatus = '1'){
		console.log("Hello ", loginStatus);
		this.router.navigate(['/']);
	}

	logOut() {
		localStorage.clear();
		this.router.navigate(['/']);
		console.log('Logged out successfully.');
	}

}
