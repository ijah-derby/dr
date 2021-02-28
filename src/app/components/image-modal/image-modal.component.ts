import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {

  img
  constructor(
    private modal: ModalController,
    private navParams: NavParams
  ) { 
    this.img = navParams.get('img');
  }

  ngOnInit() {
    console.log(this.img);
  }

  close() {
    this.modal.dismiss();
  }


}
