import { Injectable } from '@angular/core';
@Injectable()
export class UtilsService {
	constructor() {
	}
	public validPhone(phone: string): boolean {
		return phone.length === 11;
	}
}
