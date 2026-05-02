import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

	private userInfo : object = {};
	private errorMessage : string = "";

	constructor(private http: Http, private paramService: ActivatedRoute) { }

	ngOnInit() {
		this.paramService.params.subscribe(
			(res) => {
				this.http.get('http://jsonplaceholder.typicode.com/photos/'+res['id']).subscribe(
					(info) => {
						this.userInfo = info.json();
					},
					(err) => {
						console.log("Something went wrong: ", err);
						this.errorMessage = "Something went wrong while pulling the API.";
					},
					() => {
						console.log("Everything is completed so far.");
					}
				)
			},
			(err) => {
				console.log("Something went wrong: ", err);
			},
			() => {
				console.log("Everything is processed.");
			}
		)
	}

}
