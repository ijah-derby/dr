import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async show(message: any, duration = 2000) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
}
