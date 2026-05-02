import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
  //City Details
	private city1: any = {
		name: 'Bangalore',
		population: 100000,
		mayor: 'Mr Ranjith',
		area: 'Marathahalli'
	}

	private city2: any = {
		name: 'Delhi',
		population: 1000,
		mayor: 'Mr Ranjan',
		area: 'Karol Bagh'
  }
  



  // Array Of Obects
	private cities : any[] = [
		{
			name: 'Bangalore',
			population: 100000,
			mayor: 'Mr Ranjith',
			area: 'Marathahalli'
		},
		
		{
			name: 'Delhi',
			population: 1000,
			mayor: 'Mr Ranjan',
			area: 'Karol Bagh'
		},
		
		{
			name: 'Kolkata',
			population: 9000,
			mayor: 'Mr Chanakya',
			area: 'Howrah'
		}
	];
}
