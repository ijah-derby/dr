import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';

@Component({
  selector: 'app-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss'],
})
export class UploadProgressComponent implements OnInit {

  percentage = 0;

  constructor(
    private firestore: FirestoreService,
    private modalCtrl: ModalController
  ) { 
    this.firestore.progressVal.subscribe(val => {
      this.percentage = val;
      if(this.percentage === 100) {
        this.modalCtrl.dismiss();
      }
    });
  }

  ngOnInit() {}

}
