import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareModule } from '../../share/share.module';

import { ProfilePage } from './profile';

@NgModule({
	declarations: [
		ProfilePage,
	],
	imports: [
		ShareModule,
		IonicPageModule.forChild(ProfilePage),
	],
	entryComponents: [
		ProfilePage,
	],
	providers: [
	],
})
export class ProfileModule {}
