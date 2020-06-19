import { Component } from '@angular/core';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  msg = "Please Wait...";
  constructor(private firstore: FirestoreService) {
    this.msg = this.firstore.progressMsg;
    console.log(this.msg);
  }

}
