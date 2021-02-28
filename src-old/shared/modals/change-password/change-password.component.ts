import { Component, Injector, OnInit } from "@angular/core";
import { IUser } from "../../../pages/auth/helpers/model";
import { AuthService } from "../../../pages/auth/services/auth/auth.service";
import { Extender } from "../../helpers/extender";
import { FirestoreService } from "../../services/firestore/firestore.service";

/** present screen to allow user to change password */
@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent extends Extender implements OnInit {
  public model: { oldPassword: string; password: string; rpassword: string } = {
    oldPassword: null,
    password: null,
    rpassword: null,
  };
  public currentUser: IUser;

  constructor(
    protected injector: Injector,
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {
    super(injector);
  }

  /** get current user */
  public async ngOnInit() {
    this.currentUser = await this.authService.getUser();
  }

  /**
   * update user password and close modal
   */
  public changePassword() {
    this.loadingService.presentProcessingLoading();
    this.authService
      .updatePassword(this.model.oldPassword, this.model.password)
      .then(() => {
        this.loadingService.dismissLoader();
        this.closeModal();
        this.toast("Password Changed");
      })
      .catch((err) => this.failPromise(err));
  }

  private failPromise = (err: any) => {
    this.loadingService.dismissLoader();
    this.toast(err);
  };
}
