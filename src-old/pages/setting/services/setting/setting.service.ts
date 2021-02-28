import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { tap } from "rxjs/operators";
import { IPreference, ISetting } from "../../model/preference";
import { Extender } from "../../../../shared/helpers/extender";
import { AuthService } from "../../../auth/services/auth/auth.service";
import { FirestoreService } from "../../../../shared/services/firestore/firestore.service";
import { LangSelectComponent } from "../../../../shared/modals/lang-select/lang-select.component";
import { EditProfileComponent } from "../../../../shared/modals/edit-profile/edit-profile.component";
import { ChangePasswordComponent } from "../../../../shared/modals/change-password/change-password.component";
import { NotificationSettingsComponent } from "../../../../shared/modals/notification-settings/notification-settings.component";
import { ReviewComponent } from "../../../../shared/modals/review/review.component";
import { FeedbackComponent } from "../../../../shared/modals/feedback/feedback.component";
import { PrivacyComponent } from "../../../../shared/modals/privacy/privacy.component";

/**
 * crud methods to interact with firebase cloud store regarding settings
 */
@Injectable({
  providedIn: "root",
})
export class SettingService extends Extender {
  public settingsOptions: BehaviorSubject<ISetting[]> = new BehaviorSubject<
    ISetting[]
  >([]);
  public setting: IPreference;

  constructor(
    protected injector: Injector,
    private authservice: AuthService,
    private firestoreService: FirestoreService
  ) {
    super(injector);
  }

  public getUserSettings(uid: string) {
    return this.firestoreService.doc$<IPreference>(`preferences/${uid}`).pipe(
      tap((data) => {
        if (!data.uid) {
          data = {
            autoReply: true,
            hideWalkthrough: false,
            uid,
            language: "gb",
            inAppNotifications: true,
            messagePreview: true,
          };
          this.upsertPreferences(data);
        }
        this.setting = data;
        this.getSettingOptions(this.setting);
        return data;
      })
    );
  }

  public async upsertPreferences(setting: IPreference) {
    return await this.firestoreService.upsert<IPreference>(
      `preferences/${setting.uid}`,
      setting
    );
  }

  private async getSettingOptions(preference: IPreference) {
    this.settingsOptions.next([
      {
        title: this.translate.instant("setting-component.option-general-title"),
        open: true,
        items: [
          {
            icon: "assets/icons/eye-off.svg",
            text: this.translate.instant(
              "setting-component.option-general-1-text"
            ),
            description: this.translate.instant(
              "setting-component.option-general-1-description"
            ),
            checkbox: true,
            selected: this.setting.hideWalkthrough,
            event: (data) => {
              this.setting.hideWalkthrough = data;
            },
          },
          {
            icon: "assets/icons/message-square.svg",
            text: this.translate.instant(
              "setting-component.option-general-2-text"
            ),
            description: this.translate.instant(
              "setting-component.option-general-2-description"
            ),
            checkbox: true,
            selected: this.setting.autoReply,
            event: (data) => {
              this.setting.autoReply = data;
            },
          },
          {
            icon: `assets/images/flags/${this.setting.language || "gb"}.svg`,
            text: this.translate.instant(
              "setting-component.option-general-3-text"
            ),
            description: this.translate.instant(
              "setting-component.option-general-3-description"
            ),
            event: (data) => {
              this.openPage(LangSelectComponent, data);
            },
          },
        ],
      },
      {
        title: this.translate.instant("setting-component.option-account-title"),
        open: false,
        items: [
          {
            icon: "assets/icons/user.svg",
            text: this.translate.instant(
              "setting-component.option-account-1-text"
            ),
            description: this.translate.instant(
              "setting-component.option-account-1-description"
            ),
            event: (data) => this.openPage(EditProfileComponent, data),
          },
          {
            icon: "assets/icons/lock.svg",
            text: this.translate.instant(
              "setting-component.option-account-2-text"
            ),
            description: this.translate.instant(
              "setting-component.option-account-2-description"
            ),
            event: (data) => this.openPage(ChangePasswordComponent, data),
          },
          {
            icon: "assets/icons/alert-octagon.svg",
            text: this.translate.instant(
              "setting-component.option-account-3-text"
            ),
            description: this.translate.instant(
              "setting-component.option-account-3-description"
            ),
            event: (data) => this.deactivateAccount(),
          },
        ],
      },
      {
        title: this.translate.instant(
          "setting-component.option-notification-title"
        ),
        open: false,
        items: [
          {
            icon: "assets/icons/bell.svg",
            text: this.translate.instant(
              "setting-component.option-notification-1-text"
            ),
            description: this.translate.instant(
              "setting-component.option-notification-1-description"
            ),
            event: (data) => this.openPage(NotificationSettingsComponent, data),
          },
        ],
      },
      {
        title: this.translate.instant("setting-component.option-more-title"),
        open: false,
        items: [
          {
            icon: "assets/icons/heart.svg",
            text: this.translate.instant(
              "setting-component.option-more-1-text"
            ),
            description: this.translate.instant(
              "setting-component.option-more-1-description"
            ),
            event: (data) => this.openPage(ReviewComponent, data),
          },
          {
            icon: "assets/icons/mail.svg",
            text: this.translate.instant(
              "setting-component.option-more-2-text"
            ),
            description: this.translate.instant(
              "setting-component.option-more-2-description"
            ),
            event: (data) => this.openPage(FeedbackComponent, data),
          },
          {
            icon: "assets/icons/eye-off.svg",
            text: this.translate.instant(
              "setting-component.option-more-3-text"
            ),
            description: this.translate.instant(
              "setting-component.option-more-3-description"
            ),
            event: (data) => this.openPage(PrivacyComponent, data),
          },
        ],
      },
    ]);
  }

  private async openPage(component: any, data: IPreference) {
    const modal = await this.openModal(component, data);
    modal.present();
  }

  /**
   * deactivate user account by adding deactivate is true to user property,
   * navigate to account deactivated page
   */
  private async deactivateAccount() {
    const prompt = await this.alertCtrl.create({
      header: this.translate.instant(
        "setting-component.deactivated-account-alert-title"
      ),
      message: this.translate.instant(
        "setting-component.deactivated-account-alert-message"
      ),
      buttons: [
        {
          text: this.translate.instant("other.no"),
          role: "cancel",
        },
        {
          text: this.translate.instant("other.yes"),
          handler: () => {
            this.deactivate();
          },
        },
      ],
    });
    await prompt.present();
  }

  private async deactivate() {
    const user = await this.authservice.getUser();
    this.loadingService.presentProcessingLoading();
    user.deactivated = true;
    this.firestoreService
      .update(`users/${user.uid}`, user)
      .then(() => {
        this.loadingService.dismissLoader();
        this.authservice.signOut();
        this.goto(this.routes.deactivated);
        this.toast(
          this.translate.instant(
            "setting-component.deactivate-account-success-message"
          )
        );
      })
      .catch((err) => {
        this.toast(err);
        this.loadingService.dismissLoader();
      });
  }
}
