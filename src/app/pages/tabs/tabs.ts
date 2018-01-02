import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
// import { HomePage } from '../home/home';

@IonicPage({
	name: 'tabs-page',
	segment: 'portal',
})
@Component({
	templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit {
	public tabHome;
	public tabMine;

	constructor() {
	}

	public ngOnInit(): void {
		this.tabHome = 'home-page';
		this.tabMine = 'profile-page';
	}
}
