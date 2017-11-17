import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController } from 'ionic-angular';

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
		public loadingCtrl: LoadingController,
	) {}

	public get canSubmit(): boolean {
		return this.isValidPhone;
	}
	public get normalPhone() {
		return this.phone.replace(/\s+/g, '');
	}
	public get isValidPhone(): boolean {
		return this.loginSev.validPhone(this.normalPhone);
	}
	public doLogin() {
		const logining = this.loadingCtrl.create({
			content: '正在登录...',
		});
		logining.present();
		window.setTimeout(() => {
			// TODO
			logining.dismiss().then(() => {
				this.navCtrl.push('tabs-page');
			});
		}, 3000);
	}
}
