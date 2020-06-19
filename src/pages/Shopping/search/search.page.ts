import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProductsProvider } from '../providers/products';
import { CurrenciesProvider } from '../providers/currencies';
import { FavoritesProvider } from '../providers/favorites';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

	list_search: Array<any>;
	loading: any;
	start: any;
	id_user: any;
	favo_str: string = '';
	id_favo_str: any;
	list_cart: Array<any>;

	search_str: any = '';

	constructor(
		public toastCtrl: ToastController,
		public favoritesProv: FavoritesProvider,
		private storage: Storage,
		public currenciesProv: CurrenciesProvider,
		public loadingCtrl: LoadingController,
		public productsProv: ProductsProvider
	) {

		this.presentLoading();
		
		this.storage.get('user').then((val) => {
			this.id_user = val.id_auth;
			this.favoritesProv.getByUserId(this.id_user).then(data => {
				this.loading.dismiss().then(() => {
					if(data.length > 0){
						this.favo_str = data[0].payload.doc.data().id_product;
						this.id_favo_str = data[0].payload.doc.id;
						console.log(data);
					}
				})
			})
		});
		this.storage.get('cart_list').then((val) => {
			if(!val || val == null){
				this.list_cart = new Array();
			}else{
				this.list_cart = val;
			}
			console.log(this.list_cart);
		});
	}

	ionViewWillEnter(){

	}

	favorites(item){
		console.log(item.payload.doc.id);
		let check = this.favo_str.indexOf(item.payload.doc.id);
		if(check == -1){
			this.favo_str = this.favo_str + item.payload.doc.id + ' ';
		}else{
			this.favo_str = this.favo_str.replace(item.payload.doc.id + ' ', '');
		}
		this.favoritesProv.favoritesAdd(this.favo_str, this.id_user, this.id_favo_str).then((data) => {
			if(!this.id_favo_str || this.id_favo_str == null){
				this.favoritesProv.getByUserId(this.id_user).then(newFavo => {
					this.id_favo_str = newFavo[0].payload.doc.id;
				})
			}
		})
	}

	loadMore(event){
		this.productsProv.getProductByName(this.start, 2, this.search_str).then(data => {
			this.list_search = this.list_search.concat(data);
			console.log(data);
			if(data.length > 0){
				this.start = data[data.length - 1].payload.doc.data().name;
			}
			console.log(this.list_search);

			setTimeout(() => {
				event.target.disabled = true;
			}, 1500);
		});
	}


	getItems(val){
		if(val.target.value != null && val.target.value != ' ' && val.target.value != ''){
			this.productsProv.getProductByName(null, 4, val.target.value).then(data => {
				console.log(data);
				if(data.length > 0){
					console.log(this.list_search);
					this.list_search = data;
					this.start = data[data.length - 1].payload.doc.data().name;
					this.search_str = val.target.value;
					console.log(this.list_search);
				}
			}, error => {

			});
		}
		if(val.target.value == null || val.target.value == ''){
			this.list_search = new Array();
		}
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
		this.storage.set('cart_list', this.list_cart);
		console.log(this.list_cart);
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'added success',
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage');
	}

	ngOnInit() {
	}

}
