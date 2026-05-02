import { ObservableService } from './../services/observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.getRecords().subscribe(
			(res) => {
				console.log("The data is = ", res);
			},
			(err) => {
				console.log("The data is = ", err);
			},
			() => {
				console.log("Nothing to emit.");
			}
		)
  }

}
