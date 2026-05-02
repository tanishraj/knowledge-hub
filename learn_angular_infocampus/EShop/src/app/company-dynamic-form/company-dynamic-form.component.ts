import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-company-dynamic-form',
	templateUrl: './company-dynamic-form.component.html',
	styleUrls: ['./company-dynamic-form.component.scss']
})
export class CompanyDynamicFormComponent implements OnInit {

	private companyForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.companyForm = this.fb.group({
			companyName: [null, Validators.required],
			companyLocation: [null, Validators.required],
			companyImage: [null, Validators.required],
			employeesList: this.fb.array([this.generateEmployees()])
		})
	}

	generateEmployees(){
		return this.fb.group({
			employeeID: [null, Validators.required],
			employeeName: [null, Validators.required],
			employeeDepartment: [null, Validators.required],
			employeeEmail: [null, Validators.required]
		})
	}

	addEmployees(){
		var controls = this.companyForm.get('employeesList') as FormArray;
		controls.push(this.generateEmployees());
	}

	deleteEmployees(index){
		var controls = this.companyForm.get('employeesList') as FormArray;
		controls.removeAt(index);
	}
}
