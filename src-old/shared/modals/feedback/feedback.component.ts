import { Component, Injector, OnInit } from '@angular/core';
import {IUser} from '../../../pages/auth/helpers/model';
import {AuthService} from '../../../pages/auth/services/auth/auth.service';
import {Extender} from '../../helpers/extender';
import {FirestoreService} from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent extends Extender implements OnInit {
  public model: { uid: string; comment: string } = { uid: null, comment: '' };
  public currentUser: IUser;

  constructor(protected injector: Injector, private authService: AuthService, private firestoreService: FirestoreService) {
    super(injector);
  }

  /** save current user */
  public async ngOnInit() {
    const { uid } = await this.authService.getUser();
    this.model.uid = uid;
  }

  /** save feedback to feedback collection */
  public save() {
    this.firestoreService.add(`feedback`, this.model).then(() => {
      this.toast(this.translate.instant('feedback-component.success-message'));
      this.closeModal();
    });
  }
}
