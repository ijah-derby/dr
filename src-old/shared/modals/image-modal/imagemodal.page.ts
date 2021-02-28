import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-imagemodal',
  templateUrl: './imagemodal.page.html',
  styleUrls: ['./imagemodal.page.scss']
})
export class ImagePreviewPage implements OnInit {
  public img: any;
  public sliderOpts = {
    zoom: true
  };
  constructor(private navParams: NavParams, private modalController: ModalController) {}

  public ngOnInit() {
    this.img = this.navParams.get('img');
  }

  public close() {
    this.modalController.dismiss();
  }
}
