import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { IUser } from "../../../pages/auth/helpers/model";
import { AuthService } from "../../../pages/auth/services/auth/auth.service";
import { IFeed } from "../../../pages/feed/models/feed";
import { Extender } from "../../helpers/extender";
import { ImagePreviewPage } from "../../modals/image-modal/imagemodal.page";
import { NavigationExtras } from "@angular/router";

@Component({
  selector: "feed-minimal",
  templateUrl: "./minimal.component.html",
  styleUrls: ["./minimal.component.scss"],
})
export class MinimalComponent extends Extender implements OnInit {
  /** holds data for current users contact profile */
  public me: IUser;
  public currentIndex: number = 0;
  /** holds data for current users friends feed */
  @Input() public feed: IFeed;
  @Input() public itemIndex: number;

  /** emits event with type and feed */
  @Output() public event: EventEmitter<{
    type: string;
    data: IFeed;
    index: number;
  }> = new EventEmitter<{ type: string; data: IFeed; index: number }>();

  @ViewChild("postvideo", null) video: ElementRef;

  constructor(
    protected injector: Injector,
    private authService: AuthService,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {
    super(injector);
  }

  /** get user on component init */
  public async ngOnInit() {
    this.me = await this.authService.getUser();
    setTimeout(() => {
      if (this.video) {
        const video: HTMLVideoElement = this.video.nativeElement;
        video.muted = true;
      }
    }, 1000);
    // this.playVideo();
  }

  public forward(): void {
    if (this.currentIndex < this.feed.images.length - 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
  }

  public back(): void {
    if (this.currentIndex < 1) {
      this.currentIndex = this.feed.images.length - 1;
    } else {
      this.currentIndex -= 1;
    }
  }
  /** onclick emit event with event name and data */
  public clicked(name: string, index: number, feed: IFeed): void {
    console.log("feedID", feed.id);
    if (name === "like") {
      this.feed.userLiked = !this.feed.userLiked;
      if (this.feed.userLiked) {
        if (this.feed.likes) {
          this.feed.likes.push(this.me.uid);
        } else {
          let likes = [];
          likes.push(this.me.uid);
          this.feed.likes = likes;
        }
      } else {
        this.feed.likes = this.feed.likes.filter(
          (like) => like !== this.me.uid
        );
      }
    }
    this.event.emit({ type: name, data: feed, index });
  }

  public async openImage(feed: IFeed) {
    const modal = await this.modalController.create({
      component: ImagePreviewPage,
      cssClass: "preview-img",
      componentProps: {
        img: feed.images[this.currentIndex],
      },
    });
    modal.present();
  }

  goToProfile(uid: string) {
    if (this.me.uid === uid) {
      return;
    }
    let extras: NavigationExtras = {
      queryParams: {
        id: uid,
      },
    };
    this.navCtrl.navigateForward("profile", extras);
  }

  playVideo() {
    var starttime = 0; // start at 7 seconds
    var endtime = 0.5; // stop at 17 seconds

    var video = <HTMLVideoElement>document.getElementById("video-post");

    if (!video) {
      return;
    }

    video.addEventListener(
      "timeupdate",
      () => {
        if (video.currentTime >= endtime) {
          video.pause();
        }
      },
      false
    );

    //suppose that video src has been already set properly
    video.load();
    video.play(); //must call this otherwise can't seek on some browsers, e.g. Firefox 4
    try {
      video.currentTime = starttime;
    } catch (ex) {
      //handle exceptions here
    }
  }
}
