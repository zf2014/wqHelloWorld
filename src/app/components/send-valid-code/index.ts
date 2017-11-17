import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
@Component({
	selector: 'wq-send-valid-code',
	templateUrl: 'send-valid-code.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendValidCodeCmp implements OnInit {
	@Input()
	public seconds: number;
	@Input()
	public phone: string | boolean = false;
	public remainder: Observable<number> = Observable.of(this.seconds) ;
	private isSending: boolean = false;

	constructor(
		public alterCtrl: AlertController,
	) {
	}
	public ngOnInit() {
		console.log(this.seconds);
		console.log(this.isSending);
	}

	public get canTap(): boolean {
		return !this.isSending;
	}

	public send() {
		if (typeof this.phone !== 'string') {
			this.remainder = Observable.interval(1000).take(this.seconds).map((sec: number) => {
				const pastSecs = sec + 1;
				if (pastSecs === this.seconds) {
					this.isSending = false;
				}
				return this.seconds - pastSecs;
			});
			this.isSending = true;
		} else {
			this.alterCtrl.create({
				title: '',
				message: `请输入您的手机号码`,
				buttons: [
					{
						text: '我知道了',
					},
				],
			}).present();
		}
	}
}
