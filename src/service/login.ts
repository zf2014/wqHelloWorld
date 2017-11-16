import { Injectable } from '@angular/core';
import { UtilsService } from './utils';
@Injectable()
export class LoginService {
	constructor(private utilsSev: UtilsService) {}

	public validPhone(phone: string): boolean {
		return this.utilsSev.validPhone(phone);
	}
}
