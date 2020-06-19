import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController } from '@ionic/angular';
import { ProductsProvider } from '../providers/products';
import { CurrenciesProvider } from '../providers/currencies';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FavoritesProvider } from '../providers/favorites';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.page.html',
	styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

	id_obj: any;
	obj: any = null;
	loading: any;
	list_related: any;

	slidePerViewOpts = {
		speed: 1000,
		spaceBetween: 16,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		slidesPerView: 3,
	};

	list_cart: any;
	quantityIp: number= 1;

	id_user: any;
	favo_str: string = '';
	id_favo_str: any;

	constructor(
		public currenciesProv: CurrenciesProvider, 
		public loadingCtrl: LoadingController, 
		public productsProv: ProductsProvider, 
		private route: ActivatedRoute,
		public events: Events,
		public toastCtrl: ToastController, 
		private storage: Storage,
		public socialSharing: SocialSharing,
		public favoritesProv: FavoritesProvider,
	) {
		this.presentLoading();

		this.route.params.subscribe(params => {
			this.id_obj = params.id_item;

			this.productsProv.getProductById(this.id_obj).then(data => {
					
				this.obj = data[0];
				console.log(this.obj);

				this.productsProv.getProductByRelated(this.obj.payload.doc.data().tag).then(dataRelated => {
					this.loading.dismiss().then(() => {
						this.list_related = dataRelated;
						console.log(this.list_related);

						console.log(this.obj);

						console.log(this.obj.payload.doc.data().tag);
					});
				});
				
			});
		});

		this.storage.get('user').then((val) => {
			this.id_user = val['id_auth'];
			this.favoritesProv.getByUserId(this.id_user).then(data => {
				if(data.length > 0){
					this.favo_str = data[0].payload.doc.data().id_product;
					this.id_favo_str = data[0].payload.doc.id;
					console.log(data);
				}
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

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailPage');
	}

	favorites(){
		console.log(this.obj.payload.doc.id);
		let check = this.favo_str.indexOf(this.obj.payload.doc.id);
		if(check == -1){
			this.favo_str = this.favo_str + this.obj.payload.doc.id + ' ';
		}else{
			this.favo_str = this.favo_str.replace(this.obj.payload.doc.id + ' ', '');
		}
		this.favoritesProv.favoritesAdd(this.favo_str, this.id_user, this.id_favo_str).then((data) => {
			if(!this.id_favo_str || this.id_favo_str == null){
				this.favoritesProv.getByUserId(this.id_user).then(newFavo => {
					this.id_favo_str = newFavo[0].payload.doc.id;
				})
			}
		})
	}

	quantity(qtt){
		this.quantityIp = this.quantityIp + parseInt(qtt);
		if(this.quantityIp > 99){
			this.quantityIp = 99;
		}
		if(this.quantityIp < 1){
			this.quantityIp = 1;
		}
	}

	enterQuantity(qtt){
		this.quantityIp = parseInt(qtt);
		if(this.quantityIp > 99){
			this.quantityIp = 99;
		}
		if(this.quantityIp < 1 || this.quantityIp == null || isNaN(this.quantityIp) ){
			this.quantityIp = 1;
		}
		console.log(qtt);
		console.log(this.quantityIp);
	}


	addCart(){

		let itemCv = {
			id: this.obj.payload.doc.id,
			name: this.obj.payload.doc.data().name,
			price: this.obj.payload.doc.data().price,
			discount: this.obj.payload.doc.data().discount,
			description: this.obj.payload.doc.data().description,
			vote: this.obj.payload.doc.data().vote,
			created: this.obj.payload.doc.data().created,
			id_cat: this.obj.payload.doc.data().id_cat,
			tag: this.obj.payload.doc.data().tag,
			thumb: this.obj.payload.doc.data().thumb,
			thumb1: this.obj.payload.doc.data().thumb1,
			thumb2: this.obj.payload.doc.data().thumb2,
			thumb3: this.obj.payload.doc.data().thumb3,
			thumb4: this.obj.payload.doc.data().thumb4,
			quantity: this.quantityIp
		}

		let temp = this.list_cart.filter((element) => {
			if(element.id == itemCv.id){
				element.quantity = this.quantityIp + element.quantity;
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

	share(item){
		this.socialSharing.share(this.obj.payload.doc.data().name, this.obj.payload.doc.data().description, null , 'post?id='+this.obj.payload.doc.id); 
	}

	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'added success',
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}

	ngOnInit() {
	}

}
