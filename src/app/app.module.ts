import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { MineModule } from './pages/mine/mine.module';
import { TabsModule } from './pages/tabs/tabs.module';
@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		BrowserModule,
		CoreModule,
		TabsModule,
		LoginModule,
		HomeModule,
		MineModule,
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
