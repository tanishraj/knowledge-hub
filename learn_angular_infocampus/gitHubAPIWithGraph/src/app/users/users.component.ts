import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	private frm: FormGroup;
	private loading: boolean = false;
	private chartData : object;
	private pieChartLabels : string [] = [];
	private pieChartData : number [] = [];
	private pieChartType : string = "pie";

	constructor(private searchService: SearchService) {
		this.frm = new FormGroup({
			search: new FormControl(null, [Validators.required, Validators.minLength(3)])
		})
	}

	ngOnInit() {
	}

	searchKeyword(keyword: string) {
		if (keyword != null) {
			this.loading = true;
			this.searchService.searchGitUsers(keyword);

			this.searchService.searchGitUsers(keyword).then(
				res => {
					this.chartData = res;
					this.pieChartLabels = ['Public Repos', 'Followers', 'Following'];
					this.pieChartData.length = 0;
					this.pieChartData.push(this.chartData['public_repos']);
					this.pieChartData.push(this.chartData['followers']);
					this.pieChartData.push(this.chartData['following']);
				},
				err => {
					console.log("Something went wrong.", err);
				}
			);

			
		} else {
			console.log("you must provide some keyword.");
		}
	}
}
