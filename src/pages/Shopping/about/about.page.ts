import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AboutProvider } from '../providers/about';

@Component({
	selector: 'app-about',
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

	about: any;
	preview: any = [];
	loading: any;
	numbThumb: any = Array(5);

	dataForm: FormGroup;

	constructor(
		public toastCtrl: ToastController, 
		public loadingCtrl: LoadingController, 
		public aboutProv: AboutProvider,
		public callNumber: CallNumber,
		public iab: InAppBrowser,
		private formBuilder: FormBuilder,
		private navCtrl: NavController
	) {

		this.presentLoading();
		
		this.dataForm = this.formBuilder.group({
			fullname: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(60), Validators.required])],
			email: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(60), Validators.required])],
			message: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(300), Validators.required])]
		});

		this.aboutProv.getAbout().then(data => {
			this.loading.dismiss().then(() => {
				this.about = data[0];
				console.log(this.about);
				for (var i = 0; i < this.numbThumb.length; ++i) {
					let check = data[0][(i != 0)? 'thumb'+i : 'thumb'];
					if(check && check != null && check != '' && check != undefined){
						this.preview.push(check);
					}
				}
			});
		});
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}


	submitForm(){
		if (!this.dataForm.valid) {
			console.log(this.dataForm.value);
			this.presentToast('Send contact failed!');
		}else{
			this.dataForm.value.created = Date();
			this.dataForm.value.active = true;
			this.dataForm.value.subject = 'CONTACT KIWI APP';
			this.aboutProv.sendContact(this.dataForm.value).then(data => {
				this.presentToast('Send contact successfully!');
			})
		}
	}

	async presentToast(mess) {
		const toast = await this.toastCtrl.create({
			message: mess,
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}


	social(link){
		this.iab.create(link);
	}

	call(numb){
		this.callNumber.callNumber(numb, true);
	}

	ngOnInit() {
	}

	goBack() {
		this.navCtrl.back();
	}

}
