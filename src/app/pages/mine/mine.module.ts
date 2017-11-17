import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareModule } from '../../share/share.module';

import { MinePage } from './mine';

@NgModule({
	declarations: [
		MinePage,
	],
	imports: [
		ShareModule,
		IonicPageModule.forChild(MinePage),
	],
	entryComponents: [
		MinePage,
	],
	providers: [
	],
})
export class MineModule {}
