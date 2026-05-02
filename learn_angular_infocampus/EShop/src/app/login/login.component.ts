import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private user: any = {
		name: 'tanishraj.47@gmail.com',
		password: '12345'
	};

	constructor(private router: Router, private x: ActivatedRoute) { }

	ngOnInit() {
		this.x.params.subscribe(
		(res) => {
			console.log("Parameter passed through ActivatedURL is : ", res['val']);
		},
		(err) => {
			console.log("Something went wrong.");
		},
		() => {
			console.log("Process completed.")
		}
		)
	}

	checkLogin() {
		if (this.user.name == "tanishraj.47@gmail.com" && this.user.password == "12345") {
			console.log("Logged in successfully.");
			this.router.navigate(['/Welcome']);
			
		} else{
			console.log("Invalid credentials");
		}
	}

}
