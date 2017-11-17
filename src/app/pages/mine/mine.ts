import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
	name: 'mine-page',
})
@Component({
	selector: 'mine',
	templateUrl: 'mine.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinePage {
	public mineRoot = MinePage;
	constructor(
		public navCtrl: NavController,
	) {}
}
