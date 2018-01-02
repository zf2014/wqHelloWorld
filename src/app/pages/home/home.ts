import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
	name: 'home-page',
	segment: 'home',
})
@Component({
	selector: 'home',
	templateUrl: 'home.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
	constructor(
		public navCtrl: NavController,
	) {}
}
