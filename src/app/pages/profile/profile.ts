import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
	name: 'profile-page',
	segment: 'profile',
})
@Component({
	templateUrl: 'profile.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
	constructor(
		public navCtrl: NavController,
	) {}
}
