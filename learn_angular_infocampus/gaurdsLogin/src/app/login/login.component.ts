import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private email : string = "";
	private password : string = "";

	constructor(private router : Router) { }

	ngOnInit() {
	}

	checkLogin(){
		if(this.email == "tanishraj.47@gmail.com" && this.password == "12345"){
			console.log("Logged in successfully.");
			localStorage.setItem('status','1');
			this.router.navigate(['/welcome']);
		} else{
			console.log("Invalid credentials.");
		}
	}
}
