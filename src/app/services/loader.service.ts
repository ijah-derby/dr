import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  loading: any;
  constructor(
    public loadingController: LoadingController,
    private translate: TranslateService,
    private toastCtrl: ToastController
  ) {
    setTimeout(() => this.dismissLoader(), 5000);
  }

  async presentProcessingLoading() {
    this.loading = await this.loadingController.create({
      animated: true,
      backdropDismiss: true,
      showBackdrop: true,
    });
    await this.loading.present();
  }

  async presentProcessingLoadingMsg(msg: string) {
    this.loading = await this.loadingController.create({
      message: msg,
      animated: true,
      backdropDismiss: true,
      showBackdrop: true,
    });
    await this.loading.present();
  }

  async presentLoadingLoading() {
    this.loading = await this.loadingController.create({
      animated: true,
      backdropDismiss: false,
      showBackdrop: true,
      spinner: "bubbles",
    });
    await this.loading.present();
  }

  async presentLoadingBubblesLoading() {
    this.loading = await this.loadingController.create({
      animated: true,
      backdropDismiss: true,
      showBackdrop: true,
      spinner: "bubbles",
    });
    await this.loading.present();
  }

  async dismissLoader() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      translucent: true,
      cssClass: "custom-class custom-loading",
    });
    return await loading.present();
  }

  showToast(message) {
    this.toastCtrl.create({ message: message, duration: 3000 }).then(r => r.present())
  }

  showProgress(progress) {
    this.toastCtrl.create({ message: "Uploading: " + progress, position: "middle", duration: 2000 }).then(r => r.present())
  }
}
