import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';

// import { LoginPage } from './pages/login/login';
// import { TabsPage } from './pages/tabs/tabs';

@Component({
	templateUrl: 'app.html',
})
export class MyApp implements OnInit {
	public rootPage: any;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	public ngOnInit() {
		// TODO 根据本地存储 判断是先进登录页面 还是进入系统
		// this.rootPage = LoginPage;
		this.rootPage = 'tabs-page';
	}
}
