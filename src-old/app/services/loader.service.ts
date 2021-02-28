import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  loading: any;
  constructor(
    public loadingController: LoadingController,
    private translate: TranslateService
  ) {
    setTimeout(() => this.dismissLoader(), 5000);
  }

  async presentProcessingLoading() {
    this.loading = await this.loadingController.create({
      animated: true,
      backdropDismiss: false,
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
      backdropDismiss: false,
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
}
