import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';

@IonicPage({
	name: 'tabs-page',
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
		this.tabHome = HomePage;
		this.tabMine = MinePage;
	}
}
