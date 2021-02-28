import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, Events } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Storage } from '@ionic/storage';
import { Stripe } from '@ionic-native/stripe/ngx';
import { CurrenciesProvider } from '../providers/currencies';
import { OrdersProvider } from '../providers/orders';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { IUser } from 'src/pages/auth/helpers/model';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';

@Component({
	selector: 'page-checkout',
	templateUrl: './checkout.page.html',
	styleUrls: ['./checkout.page.scss']
})
export class CheckoutPage implements OnInit {
	total_price: any;
	tax_pay: any;
	shipfee_pay: any;
	total_pay: any;
	fullname: string = '';
	phone: string = '';
	address: string = '';
	validate: boolean = true;
	pay_method: any = 1;
	email: string = '';

	user_id: any = '';

	/*this card info just for test, pls set it to empty string when your app go online */
	card_info: any = {
		number: '4242424242424242',
		expMonth: '12',
		expYear: '2030',
		cvc: '200'
	}
	carts: any = '';
	settings: any = '';

	loading: any;

	addressForm : FormGroup;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public payPal: PayPal,
		public storage: Storage, 
		public toastCtrl: ToastController, 
		public stripe: Stripe,
		public events: Events,
		private formBuilder: FormBuilder,
		public currenciesProv: CurrenciesProvider,
		public ordersProv: OrdersProvider,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		private authService: AuthService
		) {

		this.route.params.subscribe(params => {
			this.total_price = params.total_price;
			this.tax_pay = params.tax_pay;
			this.shipfee_pay = params.shipfee_pay;
			this.total_pay = params.total_pay;
			console.log(this.total_pay);
		});

		this.pay_method = 1;
		console.log(this.pay_method);
		
		this.storage.ready().then(() => {
			this.storage.get('cart_list').then(data=>{
				this.carts=data;
			})

			this.storage.get('setting').then(data=>{
				this.settings=data;
			})
		})

		this.addressForm = this.formBuilder.group({
			address: ['', Validators.compose([Validators.minLength(2), Validators.required])],
			message: ['']
		});

		this.events.subscribe('user: change', () => {
			this.ionViewWillEnter();
		});

		console.log(this.pay_method);

	}
	async ngOnInit() {
		this.pay_method = 1;
		console.log(this.pay_method);
		let currentUser: IUser = await this.authService.getUser();
		console.log(currentUser);
		console.log(this.pay_method);
		if (currentUser == null) {
			this.user_id = null;
			console.log(this.pay_method);
		}else{
			this.user_id = currentUser.uid;
			this.fullname = currentUser.displayName;
			this.phone = currentUser.phone;
			this.email = currentUser.email;
			this.pay_method = 1;
			console.log(this.pay_method);
		}
		this.pay_method = 1;
		console.log(this.pay_method);
	}

	async ionViewWillEnter(){ 
		this.pay_method = 1;
		console.log(this.pay_method);
	}

	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'added success',
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	async presentAlertErr(err) {
		const alert = await this.alertCtrl.create({
			message: err,
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	order(){
		this.pay_method = 1;
		console.log(this.pay_method);
		if (!this.addressForm.valid) {
			this.validate = false;
			console.log(this.addressForm.value);
		}else{
			this.validate = true;
			let data = {
				pay_method: parseInt(this.pay_method),
				email: this.email,
				total_price: this.total_price,
				tax_pay: parseFloat(this.tax_pay),
				shipfee_pay: parseFloat(this.shipfee_pay),
				total_pay: parseFloat(this.total_pay),
				fullname: this.fullname,
				id_user: this.user_id,
				phone: this.phone,
				address: this.addressForm.value.address,
				message: this.addressForm.value.message,
				items: JSON.stringify(this.carts)
			}

			if(!data.phone) {
				data.phone = '';
			}

			console.log(data);

			if(this.pay_method==1){
				this.order_on_delivery(data);
			}
			if(this.pay_method==2){
				this.order_card(data);
			}
			if(this.pay_method==3){
				this.order_on_paypal(data);
			}
		}
	}

	order_on_delivery(data){
		console.log('data', data);
		this.ordersProv.addOrders(data).then(val => {
			this.storage.remove('cart_list').then(() =>{
				this.presentAlertErr('Order successfully!').then(() => {
					this.router.navigateByUrl('/home');
				});
			});
		})
	}


	order_card(data){
		this.stripe.setPublishableKey(environment.stripe_publish_key);
		this.stripe.createCardToken(this.card_info).then((token) => {

			this.ordersProv.addOrders(data).then(val => {
				this.storage.remove('cart_list').then(() =>{
					this.presentAlertErr('Order successfully!').then(() => {
						this.router.navigateByUrl('/home');
					});
				});
			})

		}).catch(error => {
			this.presentAlertErr(error);
		});
	}

	order_on_paypal(data){
		this.payPal.init({
			PayPalEnvironmentProduction: environment.paypal_live_client_id,
			PayPalEnvironmentSandbox: environment.paypal_sandbox_client_id
		}).then(() => {
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
			})).then(() => {
				let payment = new PayPalPayment(this.total_pay,this.settings.currency_code, 'Buy Pizza', 'sale');
				this.payPal.renderSinglePaymentUI(payment).then(() => {
					
					this.ordersProv.addOrders(data).then(val => {
						this.storage.remove('cart_list').then(() =>{
							this.presentAlertErr('Order successfully!').then(() => {
								this.router.navigateByUrl('/home');
							});
						});
					})

				}, () => {
				});
			}, () => {
			});
		}, () => {
		});

	}

}
