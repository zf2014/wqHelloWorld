import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';

import { LoginService } from '../../service/login';

@IonicPage({
	name: 'login-page',
})
@Component({
	selector: 'login',
	templateUrl: 'login.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

	public phoneMask: any[] = [/[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
	public phone: string = '';
	public validCode: string;

	constructor(
		public navCtrl: NavController,
		public alterCtrl: AlertController,
		private loginSev: LoginService,
	) {}

	public get canSubmit(): boolean {
		return this.loginSev.validPhone(this.normalPhone);
	}
	private get normalPhone() {
		return this.phone.replace(/\s+/g, '');
	}
	public doSubmit() {
		this.alterCtrl.create({
			title: '提示框',
			message: `您输入的手机号码是：${this.phone}`,
		}).present();
	}
}
