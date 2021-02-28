import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email';
import { UsersProvider } from '../providers/users';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.page.html',
	styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
	
	public resetPasswordForm;

	constructor(
		public usersProv: UsersProvider, 
		public alertCtrl: AlertController, 
		public formBuilder: FormBuilder,
		) {

		this.resetPasswordForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
		})
	}

	resetPassword() {
		if (!this.resetPasswordForm.valid) {
			console.log(this.resetPasswordForm.value);
		} else {
			this.usersProv.resetPassword(this.resetPasswordForm.value.email).then((user) => {
				this.presentAlertErr('We just sent you a reset link to your email!');
			}, (error) => {
				this.presentAlertErr(error.message);
			});
		}
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

	ngOnInit() {
	}

}
