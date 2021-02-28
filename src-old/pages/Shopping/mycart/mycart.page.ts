import { Component, OnInit } from '@angular/core';
import { Events, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CurrenciesProvider } from '../providers/currencies';

@Component({
	selector: 'app-mycart',
	templateUrl: './mycart.page.html',
	styleUrls: ['./mycart.page.scss'],
})
export class MycartPage implements OnInit {

	list_cart: any;
	tax: number;
	tax_pay: number;
	shipfee: number;
	shipfee_pay: number;
	total_price: any = 0;
	total_pay: any = 0;

	constructor(
		public events: Events,
		public currenciesProv: CurrenciesProvider,
		private storage: Storage,
		private navCtrl: NavController
		) {

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

		this.storage.get('setting').then((val) => {
			this.tax = val.tax_fee;
			this.shipfee = val.ship_fee;
			this.price_calc();
		})
	}

	ionViewWillEnter(){
	}

	price_calc(){
		this.total_price = 0;
		this.list_cart.forEach((val) => {
			let item_tmp:number = 0;
			if(val.discount > 0){
				item_tmp = (parseFloat(val.price) - parseFloat(val.price)/100*parseFloat(val.discount)) * parseInt(val.quantity);
			}else{
				item_tmp = parseFloat(val.price) * parseInt(val.quantity);
			}
			this.total_price = this.total_price + item_tmp;
		});
		this.shipfee_calc();
		this.tax_calc();
		this.total_pay_calc();
	}

	shipfee_calc(){
		this.shipfee_pay = parseFloat(this.total_price)/100*this.shipfee;
	}

	tax_calc(){
		this.tax_pay = parseFloat(this.total_price)/100*this.tax;
	}

	total_pay_calc(){
		this.total_pay = this.shipfee_pay + this.tax_pay + this.total_price;
	}

	quantity(i, qtt){
		this.list_cart[i].quantity = parseFloat(this.list_cart[i].quantity) + parseFloat(qtt);
		if(this.list_cart[i].quantity > 99){
			this.list_cart[i].quantity = 99;
		}
		if(this.list_cart[i].quantity < 1){
			this.list_cart[i].quantity = 1;
		}
		this.events.publish('cart_list: change', this.list_cart);
		this.storage.set('cart_list', this.list_cart);
		this.price_calc();
	}

	enterQuantity(i, qtt){
		this.list_cart[i].quantity = parseFloat(qtt);
		if(this.list_cart[i].quantity > 99){
			this.list_cart[i].quantity = 99;
		}
		if(this.list_cart[i].quantity < 1){
			this.list_cart[i].quantity = 1;
		}
		this.events.publish('cart_list: change', this.list_cart);
		this.storage.set('cart_list', this.list_cart);
		this.price_calc();
	}

	removeItem(i){
		this.list_cart.splice(i, 1);
		this.events.publish('cart_list: change', this.list_cart);
		this.storage.set('cart_list', this.list_cart);
	}

	ngOnInit() {
	}

	goBack() {
		this.navCtrl.back();
	}

}
