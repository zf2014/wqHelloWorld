import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		HttpModule,
	],
	entryComponents: [

	],
	providers: [
		StatusBar,
		SplashScreen,
		{
			provide: ErrorHandler,
			useClass: IonicErrorHandler,
		},
	],
})
export class CoreModule {}
