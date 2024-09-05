import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { IDataForm } from '../../interface/main.interface';

@Component({
	selector: 'app-data-show',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './data-show.component.html',
	styleUrl: './data-show.component.scss',
})
export class DataShowComponent {
	private _data!: IDataForm;
	constructor(
		private readonly dataService: DataService
	) {

	}

	get data() {
		return this._data;
	}

	get color(): string {
		const { gender } = this.dataService.data;
		if (gender === 'male') {
			return 'blue';
		}
		if (gender === 'female') {
			return 'red';
		}
		return 'yellow';
	}

	ngOnInit() {
		this._data = this.dataService.data;
	}
}
