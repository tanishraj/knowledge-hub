import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  //Doctor Details Information
	private doctor1: any = {
		name: 'Mohan Singh',
		age: 25,
		specialization: 'Cardiologist',
		contact: 9734298569,
		email: 'mohansingh7@gmail.com'
	}

	private doctor2: any = {
		name: 'Nick Adams',
		age: 22,
		specialization: 'Anesthesiologist',
		contact: 9734298569,
		email: 'nickadams@gmail.com'
	}

}
