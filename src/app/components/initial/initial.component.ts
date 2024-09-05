import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { IDataForm } from '../../interface/main.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-initial',
	standalone: true,
	imports: [ReactiveFormsModule, FormsModule, CommonModule],
	templateUrl: './initial.component.html',
	styleUrl: './initial.component.scss',
})
export class InitialComponent {
	form: FormGroup = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		gender: new FormControl('', [Validators.required]),
	});

	get error() {
		return !this.form.get('gender')?.valid && this.form.get('gender')?.touched;
	}

	genders = [
		{ val: 'male', display: 'Male' },
		{ val: 'female', display: 'Female' },
		{ val: 'others', display: 'Others' },
	];

	constructor(
		private readonly dataService: DataService,
		private readonly route: Router
	) {

	}

	clear() {
		this.form.reset();
	}

	submit() {
		if (!this.form.valid) {
			this.form.markAllAsTouched();
			return;
		}
		this.dataService.data = <IDataForm>this.form.getRawValue();
		this.route.navigate(['data']);
	}
}
