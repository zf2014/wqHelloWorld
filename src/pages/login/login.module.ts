import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { IonicPageModule } from 'ionic-angular';
import { ShareModule } from '../../app/share/share.module';

import { LoginService } from '../../service/login';
import { LoginPage } from './login';

@NgModule({
	declarations: [
		LoginPage,
	],
	imports: [
		FormsModule,
		ShareModule,
		TextMaskModule,
		IonicPageModule.forChild(LoginPage),
	],
	// entryComponents: [
	//   LoginPage
	// ],
	exports: [LoginPage],
	providers: [
		LoginService,
	],
})

export class LoginModule {}
