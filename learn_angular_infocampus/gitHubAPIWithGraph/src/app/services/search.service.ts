import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()

export class SearchService{

	private apiRoot = "https://api.github.com/users/";
	private result : object;
	private loading : boolean;
	private errorMsg : string;
	
	constructor(private http : Http) { 
		this.result = null;
		this.loading = false;
	}

	searchGitUsers(keyword : string){
		let promise = new Promise((resolve, reject) => {
			let apiURL = this.apiRoot + keyword;

			this.http.get(apiURL)
			.toPromise()
			.then(
				(res) => {
					this.result = res.json();
					resolve(this.result);
				},
				(err) => {
					this.errorMsg = "gitHub user name " + err.json().message;
					reject();
				}
			)
		})

		return promise;
	}
}