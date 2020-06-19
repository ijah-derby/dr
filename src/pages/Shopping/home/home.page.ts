import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Events, ModalController, MenuController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { ProductsProvider } from '../providers/products';
import { CurrenciesProvider } from '../providers/currencies';
import { FavoritesProvider } from '../providers/favorites';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { IUser } from 'src/pages/auth/helpers/model';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	slidePerViewOpts = {
		speed: 1000,
		spaceBetween: 16,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		slidesPerView: 2,
	};

	slidePerViewOpts2 = {
		speed: 1000,
		spaceBetween: 16,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		slidesPerView: 4,
	};
	
	list_product: any;
	list_product_new: any;
	list_product_slide: any;
	loading: any;
	start: any;
	id_user: any;
	favo_str: string = '';
	id_favo_str: any;
	list_cart: Array<any>;
	public currentUser: IUser;

	constructor(public events: Events, 
		public toastCtrl: ToastController, 
		public favoritesProv: FavoritesProvider, 
		private storage: Storage, 
		public currenciesProv: CurrenciesProvider, 
		public loadingCtrl: LoadingController, 
		public productsProv: ProductsProvider, 
		public navCtrl: NavController,
		private admobFree: AdMobFree,
		private authService: AuthService,
		private menuCtrl: MenuController
		){

		this.presentLoading();
		
		const bannerConfig: AdMobFreeBannerConfig = {
			id: 'ca-app-pub-1610982520322923~2132734290',
			isTesting: true,
			autoShow: true
		};
		this.admobFree.banner.config(bannerConfig);

		this.admobFree.banner.prepare().then(() => {
			// banner Ad is ready
			// if we set autoShow to false, then we will need to call the show method here
		}).catch(e => console.log(e));




		this.events.subscribe('cart_list: change', (lst) => {
			this.list_cart = lst;
		});

		this.events.subscribe('user: change', (user) => {
			
			if(user || user != null){
				console.log(user);
				this.id_user = user.uid;

				this.favoritesProv.getByUserId(this.id_user).then(data => {
					if(data.length > 0){
						this.favo_str = data[0].payload.doc.data().id_product;
						this.id_favo_str = data[0].payload.doc.id;
						console.log(data);
					}
				})

				this.productsProv.getProduct(null, 4).then(data => {
					this.list_product = data;
					this.start = data[data.length - 1].payload.doc.data().name;
					console.log(this.list_product);
				}, error => {

				});

				this.productsProv.getProductBySlide(6).then(data => {
					this.list_product_slide = data;
					console.log(this.list_product_slide);
				}, error => {

				});

				this.productsProv.getProductByCreated(6).then(data => {
					this.loading.dismiss().then(() => {
						this.list_product_new = data;
						console.log(this.list_product_new);
					});
				}, error => {

				});
			}
		});
	}
	async ngOnInit() {
		this.currentUser = await this.authService.getUser();
		this.id_user = this.currentUser.uid;
		console.log(this.id_user);
		this.favoritesProv.getByUserId(this.id_user).then(data => {
			console.log(data);
			if(data.length > 0){
				this.favo_str = data[0].payload.doc.data().id_product;
				this.id_favo_str = data[0].payload.doc.id;
				console.log(data);
			}
		});
	}

	ionViewWillEnter(){
		this.storage.ready().then(() => {
			this.storage.get('cart_list').then((val) => {
				if(!val || val == null){
					this.list_cart = new Array();
				}else{
					this.list_cart = val;
				}
				console.log(this.list_cart);
			});

			this.productsProv.getProduct(null, 4).then(data => {
				this.list_product = data;
				if(data) {
					this.start = data[data.length - 1].payload.doc.data().name;
				}
				console.log(this.list_product);
			}, error => {

			});

			this.productsProv.getProductBySlide(6).then(data => {
				this.list_product_slide = data;
				console.log(this.list_product_slide);
			}, error => {

			});

			this.productsProv.getProductByCreated(6).then(data => {
				this.loading.dismiss().then(() => {
					this.list_product_new = data;
					console.log(this.list_product_new);
				});
			}, error => {

			});
		})
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	loadMore(event){
		this.productsProv.getProduct(this.start, 2).then(data => {
			this.list_product = this.list_product.concat(data);
			console.log(data);
			if(data.length > 0){
				this.start = data[data.length - 1].payload.doc.data().name;
			}
			console.log(this.list_product);

			setTimeout(() => {
				event.target.disabled = true;
			}, 1500);
		});
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

	goBack() {
		this.navCtrl.back();
	}

	openMenu() {
		this.menuCtrl.enable(true, 'shop');
		this.menuCtrl.toggle('shop');
	}

}
