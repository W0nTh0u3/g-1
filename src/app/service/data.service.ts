import { Injectable } from '@angular/core';
import { IDataForm } from '../interface/main.interface';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private _data!: IDataForm;
	constructor() { }

	set data(val: IDataForm) {
		this._data = val;
	}

	get data() {
		return this._data;
	}
}
