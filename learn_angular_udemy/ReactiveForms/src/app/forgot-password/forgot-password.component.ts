import { PasswordValidators } from './password.validators';
import { FormGroup, FormBuilder, Validators } from '@angular/Forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
	form: FormGroup;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			oldPassword: ['',
				Validators.required,
				PasswordValidators.validOldPassword
			],
			newPassword: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		}, {
				validator: PasswordValidators.passwordsShouldMatch
			});
	}

	get oldPassword() { return this.form.get('oldPassword'); }
	get newPassword() { return this.form.get('newPassword'); }
	get confirmPassword() { return this.form.get('confirmPassword'); }
}
