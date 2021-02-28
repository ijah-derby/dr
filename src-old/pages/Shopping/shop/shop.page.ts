import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

import { CategoriesProvider } from '../providers/categories';
import { NavigationExtras } from '@angular/router';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.page.html',
	styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

	list_cat: any;
	loading: any;

	constructor(
		public catProv: CategoriesProvider,
		public loadingCtrl: LoadingController,
		private navCtrl: NavController
	) {
		this.presentLoading();
		this.catProv.getCatParent().then(data => {
			this.loading.dismiss().then(() => {
				this.list_cat = data;
				console.log(this.list_cat[0].payload.doc.id);
				console.log(this.list_cat);
			});
		}, error => {

		});
	}

	ngOnInit() {
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	goBack() {
		this.navCtrl.back();
	}

	goToList(item: any) {
		let extras: NavigationExtras = {
			queryParams: {
				id: item.payload.doc.id, 
				name: item.payload.doc.data().name
			}
		}
		this.navCtrl.navigateForward('list', extras);
	}

}
