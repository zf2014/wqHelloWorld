import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareModule } from '../../share/share.module';

import { HomePage } from './home';

@NgModule({
	declarations: [
		HomePage,
	],
	imports: [
		ShareModule,
		IonicPageModule.forChild(HomePage),
	],
	entryComponents: [
		HomePage,
	],
	providers: [
	],
})
export class HomeModule {}
