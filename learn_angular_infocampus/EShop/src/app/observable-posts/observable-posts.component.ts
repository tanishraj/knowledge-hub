import { ObservableService } from './../services/observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-observable-posts',
	templateUrl: './observable-posts.component.html',
	styleUrls: ['./observable-posts.component.scss']
})
export class ObservablePostsComponent implements OnInit {

	private users: any[] = [];

	constructor(private observablePostService: ObservableService) { }

	ngOnInit() {
		this.observablePostService.fetchUsersFromAPI().subscribe(
			(res) => {
				this.users = (res.json());
			},
			(err) => {
				console.log(err);
			},
			() => {
				console.log("Everything is done, nothing to emmit.");
			}
		)
	}

}
