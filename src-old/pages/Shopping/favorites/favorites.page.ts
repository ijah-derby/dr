import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, Events, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProductsProvider } from '../providers/products';
import { FavoritesProvider} from '../providers/favorites';
import { CurrenciesProvider } from'../providers/currencies';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { IUser } from 'src/pages/auth/helpers/model';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.page.html',
	styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

	list_favo_product: any = [];
	list_favo_product_slide: any = [];
	loading: any;
	limit: number = 4;
	start: number = 0;
	id_user: any;
	favo_str: string = '';
	id_favo_str: any;
	list_cart: Array<any>;
	favo_id_arr: Array<any>;

	constructor(
		public events: Events, 
		public toastCtrl: ToastController, 
		public loadingCtrl: LoadingController, 
		public productsProv: ProductsProvider, 
		private storage: Storage, 
		public favoritesProv: FavoritesProvider, 
		public currenciesProv: CurrenciesProvider,
		private navCtrl: NavController,
		private authService: AuthService
	) {

		this.presentLoading();

		// this.storage.get('user').then((val) => {
		// 	this.id_user = val.id_auth;
			
		// });


		this.storage.get('cart_list').then((val) => {
			if(!val || val == null){
				this.list_cart = new Array();
			}else{
				this.list_cart = val;
			}
			console.log(this.list_cart);
		});
		

		this.events.subscribe('cart_list: change', (lst) => {
			this.list_cart = lst;
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


	loadMore(event){

		let count = this.start;

		for (var i = this.start; i < this.favo_id_arr.length; i++) {
			if(this.start - count < this.limit){
				this.favoritesProv.getFavoByIdPd(this.favo_id_arr[i]).then(data => {
					if(data.length > 0){
						this.list_favo_product = this.list_favo_product.concat(data);
						this.start = this.start + 1;
					}else{
						setTimeout(() => {
							event.target.disabled = true;
						}, 1500);
					}
				}, error => {
					setTimeout(() => {
						event.target.disabled = true;
					}, 1500);
				});
			}else{
				setTimeout(() => {
					event.target.disabled = true;
				}, 1500);
				break;
			}
		}
	}

	favorites(item, i){
		console.log(item.payload.doc.id);
		this.favo_str = this.favo_str.replace(item.payload.doc.id + ' ', '');
		this.favoritesProv.favoritesAdd(this.favo_str, this.id_user, this.id_favo_str).then((data) => {
			this.list_favo_product.splice(i, 1);
			console.log(this.list_favo_product);
		})
	}

	addCart(item){

		console.log(item);

		let itemCv = {
			id: item.payload.doc.id,
			name: item.payload.doc.data().name,
			price: item.payload.doc.data().price,
			discount: item.payload.doc.data().discount,
			description: item.payload.doc.data().description,
			vote: item.payload.doc.data().vote,
			created: item.payload.doc.data().created,
			id_cat: item.payload.doc.data().id_cat,
			tag: item.payload.doc.data().tag,
			thumb: item.payload.doc.data().thumb,
			thumb1: item.payload.doc.data().thumb1,
			thumb2: item.payload.doc.data().thumb2,
			thumb3: item.payload.doc.data().thumb3,
			thumb4: item.payload.doc.data().thumb4,
			quantity: 1
		}

		let temp = this.list_cart.filter((element) => {
			if(element.id == itemCv.id){
				element.quantity = 1 + element.quantity;
				return true;
			}
		})
		console.log(temp);
		if(temp.length == 0){
			this.list_cart = this.list_cart.concat(itemCv);
		}

		this.presentToast();

		// this.list_cart = new Array();
		this.events.publish('cart_list: change', this.list_cart);
		this.storage.set('cart_list', this.list_cart);
		console.log(this.list_cart);
	}

	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'added success',
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}

	async ngOnInit() {
		let currenUser: IUser = await this.authService.getUser();
		this.id_user = currenUser.uid;
		this.favoritesProv.getByUserId(currenUser.uid).then(data => {
			if(data.length > 0){
				this.favo_str = data[0].payload.doc.data().id_product;
				this.id_favo_str = data[0].payload.doc.id;
				this.favo_id_arr = this.favo_str.split(' ');
				console.log(data);

				for (var i = this.start; i < this.limit && i < this.favo_id_arr.length; i++) {
					this.favoritesProv.getFavoByIdPd(this.favo_id_arr[i]).then(dataProduct => {
						this.loading.dismiss().then(() => {
							console.log(dataProduct);
							if(dataProduct.length > 0){
								this.list_favo_product = this.list_favo_product.concat(dataProduct);
								this.start = this.start + 1;
							}
						})
					}, error => {

					});
				}
				console.log(this.favo_id_arr);
			}
		})
	}

	goBack() {
		this.navCtrl.back();
	}

}
