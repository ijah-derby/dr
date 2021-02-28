import { Component, OnInit } from '@angular/core';
import { Events, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email';
import { Storage } from '@ionic/storage';
import { UsersProvider } from '../providers/users';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	public signupForm;
	loading: any;

	constructor(
		public events: Events, 
		private storage: Storage, 
		public loadingCtrl: LoadingController, 
		public alertCtrl: AlertController, 
		public usersProv: UsersProvider, 
		public formBuilder: FormBuilder,
		private router: Router
	) {
		this.signupForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			fullname: ['', Validators.compose([Validators.minLength(6), Validators.required])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
			phone: ['', Validators.compose([Validators.minLength(5), Validators.required])],
			address: ['', Validators.compose([Validators.minLength(2), Validators.required])]
		})
	}

	signupUser(){
		if (!this.signupForm.valid) {
			console.log(this.signupForm.value);
		} else {
			this.presentLoading();
			this.usersProv.signupUser(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.fullname, this.signupForm.value.phone, this.signupForm.value.address).then(authData => {
				console.log(authData);
				this.usersProv.getUser(authData.user.uid).then(data => {
					this.loading.dismiss().then(() => {
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
						this.storage.set('user', user);
						this.events.publish('user: change', user);
						console.log(data);
						this.router.navigateByUrl('/home');
					});
				});
			}, (error) => {
				this.loading.dismiss().then(() => {
					this.presentAlertErr(error);
				});
			});
		}
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
			message: err.message,
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	ngOnInit() {
	}

}
