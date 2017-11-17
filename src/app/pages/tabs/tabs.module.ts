import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareModule } from '../../share/share.module';

import { TabsPage } from './tabs';

@NgModule({
	declarations: [
		TabsPage,
	],
	imports: [
		ShareModule,
		IonicPageModule.forChild(TabsPage),
	],
	entryComponents: [
		TabsPage,
	],
	exports: [
		TabsPage,
	],
	providers: [
	],
})
export class TabsModule {}
