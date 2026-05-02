import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-reactive-forms',
	templateUrl: './reactive-forms.component.html',
	styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
	private frm: FormGroup;
	private formData:object;
	private formSubmitStatus = false;

	constructor() { 
		this.frm = new FormGroup({
			name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("^[a-zA-Z ]*$")]),
			email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)])
		});
	}

	ngOnInit() {

	}

	displayRecords(){
		console.log(this.frm.value);
		this.formData = this.frm.value;
		this.formSubmitStatus = true;
	}

}
