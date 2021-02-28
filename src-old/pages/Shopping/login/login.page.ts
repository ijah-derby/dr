import { Component, OnInit } from '@angular/core';
import { Events, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email';
import { UsersProvider } from '../providers/users';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public loginForm;
	loading: any;

	constructor(
		public events: Events, 
		private storage: Storage, 
		public loadingCtrl: LoadingController, 
		public usersProv: UsersProvider,
		public alertCtrl: AlertController, 
		public formBuilder: FormBuilder, 
		private router: Router,
		public fb: Facebook
	) {
		this.loginForm = formBuilder.group({
			email: ['demo@gmail.com', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['123456', Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}

	async presentAlert() {
		const alert = await this.alertCtrl.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: ['OK']
		});
		await alert.present();
	}

	async presentAlertErr() {
		const alert = await this.alertCtrl.create({
			message: 'login failed!',
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	loginUser(): void {
		if (!this.loginForm.valid) {
			console.log(this.loginForm.value);
		} else {
			this.usersProv.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
				
				console.log(authData);
				this.usersProv.getUser(authData.user.uid).then(data => {
					let user = {
						avt: data[0].payload.doc.data().avt,
						username: data[0].payload.doc.data().username,
						fullname: data[0].payload.doc.data().fullname,
						email: data[0].payload.doc.data().email,
						address: data[0].payload.doc.data().address,
						phone: data[0].payload.doc.data().phone,
						id: data[0].payload.doc.id,
						id_auth: data[0].payload.doc.data().id_auth
					}
					console.log(user);
					this.storage.set('user', user).then(() => {
						this.loading.dismiss().then(() => {
							this.events.publish('user: change', user);
							this.router.navigateByUrl('home');
						});
					});
				})
			}, error => {
				this.loading.dismiss().then(() => {
					this.presentAlertErr();
				});
			});
			this.presentLoading();
		}
	}



	login_fb(){
		this.usersProv.facebookLogin().then(authData => {
			console.log(authData);
			
			this.usersProv.getUser(authData.uid).then(data => {
				let user = {
					avt: data[0].payload.doc.data().avt,
					username: data[0].payload.doc.data().username,
					fullname: data[0].payload.doc.data().fullname,
					email: data[0].payload.doc.data().email,
					address: data[0].payload.doc.data().address,
					phone: data[0].payload.doc.data().phone,
					id: data[0].payload.doc.id,
					id_auth: data[0].payload.doc.data().id_auth
				}
				this.storage.set('user', user).then(() => {
					this.loading.dismiss().then(() => {
						this.events.publish('user: change', user);
						this.router.navigateByUrl('home');
					});
				});
			})	
		}, error => {
			this.loading.dismiss().then(() => {
				this.presentAlertErr();
			});
		});
		this.presentLoading();
	}
	

	ngOnInit() {
		
	}

}
