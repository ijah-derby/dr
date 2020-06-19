import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { OrdersProvider } from '../providers/orders';
import { CurrenciesProvider } from '../providers/currencies';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src123/pages/auth/services/auth/auth.service';
import { IUser } from 'src/pages/auth/helpers/model';

@Component({
	selector: 'app-myorder',
	templateUrl: './myorder.page.html',
	styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage implements OnInit {

	list_orders_success:any = [];
	list_orders_pending:any = [];

	settings: any;

	user_id: any;

	loading: any;

	constructor(
		public currenciesProv: CurrenciesProvider, 
		public ordersProv: OrdersProvider, 
		public storage: Storage,
		public loadingCtrl: LoadingController,
		private navCtrl: NavController,
		private authService: AuthService
	) { 
		this.presentLoading();

		this.storage.get('setting').then(data=>{
			this.settings=data;
		})

		this.storage.get('user').then((obj) => {
			console.log(obj);
			
		});

	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	ionViewWillEnter(){
	}

	
	async ngOnInit() {
		let currentUser: IUser = await this.authService.getUser();
		if (currentUser == null) {
			this.user_id = null;
		}else{
			this.user_id = currentUser.uid;
		
			this.ordersProv.getOrdersPending(this.user_id).then(data => {
				this.list_orders_pending = data;
				for (var i = 0; i < data.length; ++i) {
					this.list_orders_pending[i]['lst_items'] = JSON.parse(data[i].payload.doc.data().items);
				}
				console.log(this.list_orders_pending);
			});

			this.ordersProv.getOrdersSuccess(this.user_id, 10).then(data => {
				this.loading.dismiss().then(() => {
					this.list_orders_success = data;
					for (var i = 0; i < data.length; ++i) {
						this.list_orders_success[i]['lst_items'] = JSON.parse(data[i].payload.doc.data().items);
					}
				})
				console.log(this.list_orders_success);
			});
		}
	}

	goBack() {
		this.navCtrl.back();
	}
}
