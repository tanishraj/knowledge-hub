import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

	private frm: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.frm = this.fb.group({
			name: [null, [Validators.required, Validators.minLength(3)]],
			description: [null, [Validators.required]],
			patients: this.fb.array([this.createPatientForm()])
		});
	}

	createPatientForm(){
		return this.fb.group({
			patientName: [null, [Validators.required]],
			patientDisease: [null, [Validators.required]]
		})
	}

	addPatient(){
		var controls = this.frm.get('patients') as FormArray;
		controls.push(this.createPatientForm());
	}

	deletePatient(index){
		var controls = this.frm.get('patients') as FormArray;
		controls.removeAt(index);
	}

}
