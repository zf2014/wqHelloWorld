import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CoreModule } from './core/core.module';

import { LoginModule } from './pages/login/login.module';
@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		BrowserModule,
		CoreModule,
		LoginModule,
		IonicModule.forRoot(MyApp),
	],
	// tslint:disable-next-line:object-literal-sort-keys
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [

	],
})
export class AppModule {}
