import {
  Component,
  ElementRef,
  Injector,
  OnInit,
  ViewChild,
} from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { isArray } from "util";
import { NotificationService } from "../../../../app/notifications/service/notification.service";
import { Extender } from "../../../../shared/helpers/extender";
import { ITabView } from "../../../../shared/helpers/models";
import { CommonService } from "../../../../shared/services/common/common.service";
import { IUser } from "../../../auth/helpers/model";
import { AuthService } from "../../../auth/services/auth/auth.service";
import { IMessage, INotification } from "../../../messages/models/message";
import { MessagesService } from "../../../messages/services/messages/messages.service";
import { PeopleService } from "../../services/people/people.service";
import { PersonComponent } from "../person/person.component";
import { NavigationExtras } from "@angular/router";
import {
  NavController,
  MenuController,
  LoadingController,
} from "@ionic/angular";

/**
 * get list of people fro users collection, group them by first letter of their display names.
 * using a href to scroll to category by letter in the user list.
 * you can follow and unfollow users, call and start message
 */
@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"],
})
export class PeopleComponent extends Extender implements OnInit {
  /** get people using the app */
  public list: IUser[];
  public tempList: IUser[];
  public fullList: IUser[];
  public fullTempList: IUser[];
  isSearched: boolean = false;

  /** group contacts by first letter of their first names */
  public groupedPeople: Array<{ letter: any; people: IUser[] }> = [];

  /** get current currentUser */
  public currentUser: IUser;

  /** stores string array of alphabets */
  public alpha: string[] = [];

  /** stores tabbed views properties */
  public views: ITabView[] = [];

  /** toggles search bar in template */
  public openSearch: boolean = false;

  public selectedIndex: number = 0;
  public friends: any;
  public messages: IMessage[] = [];
  public messageCounter: number = 0;
  public notificationCounter: number = 0;

  items = [];
  numTimesLeft = 5;

  /** references content area of content page */
  @ViewChild("content", null) public content: ElementRef;
  @ViewChild("callNumber", null) public callNumber: ElementRef;

  constructor(
    protected injector: Injector,
    private authService: AuthService,
    private messageService: MessagesService,
    private peopleService: PeopleService,
    private commonService: CommonService,
    public notificationService: NotificationService,
    private angularFire: AngularFirestore,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private loadCtrl: LoadingController
  ) {
    super(injector);
    this.alpha = this.peopleService.alpha;
    this.views = this.peopleService.views;
    this.addMoreItems();
  }

  /** get currentUser, get users friends ids and get all users from user collection */
  public async ngOnInit() {
    this.loadingService.presentProcessingLoading();
    this.list = [];
    this.openProfileFromUrl();
    this.currentUser = await this.authService.getUser();
    this.getFilteredMessages();
    this.subscriptions.push(
      this.peopleService
        .getFriendIds(this.currentUser.uid)
        .subscribe((ids) => (this.friends = ids))
    );
    this.angularFire
      .collection("users", (ref) => ref.limit(20))
      .get()
      .subscribe((resp) => {
        let arr = [];
        resp.docs.forEach((user) => {
          let peopleUser: IUser = user.data() as IUser;
          peopleUser.doc = user;
          if (peopleUser.uid !== this.currentUser.uid) {
            arr.push(peopleUser);
          }
        });
        this.list = arr;
        this.tempList = arr;
        // this.showList(this.selectedIndex);
        this.loadingService.dismissLoader();
      });

    this.loadAllUsers();

    this.notificationService
      .getNotifications(this.currentUser.uid)
      .then((not: INotification[]) => {
        console.log("page-not", not);
        this.notificationCounter = this.notificationService.unreadCounter;
        this.notificationCounter = this.notificationService.getUnreadCount(
          not,
          this.currentUser.uid
        );
        console.log("unread counter", this.notificationService.unreadCounter);
      });
  }

  loadData(event) {
    console.log("event", event);
    setTimeout(() => {
      console.log("Done");
      // this.addMoreItems();
      this.loadMore(event);
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 1000);
  }

  addMoreItems() {
    for (let i = 0; i < 100; i++) this.items.push(i);
  }

  loadAllUsers() {
    this.angularFire
      .collection("users")
      .get()
      .subscribe((resp) => {
        let arr = [];
        resp.docs.forEach((user) => {
          let peopleUser: IUser = user.data() as IUser;
          peopleUser.doc = user;
          if (peopleUser.uid !== this.currentUser.uid) {
            arr.push(peopleUser);
          }
        });
        this.fullList = arr;
        this.fullTempList = arr;
        // this.showList(this.selectedIndex);
        this.loadingService.dismissLoader();
      });
  }

  /** if you navigate to this page with query params, open person modal and use id in query param to find user details */
  public openProfileFromUrl() {
    this.subscriptions.push(
      this.activatedRoute.queryParams.subscribe((param) => {
        if (param && param.id) {
          this.open(param.id);
        }
      })
    );
  }

  public loadMore(event: any) {
    console.log("loading more", event);

    const cursor = this.list[this.list.length - 1].doc;

    this.angularFire
      .collection("users", (ref: any) => ref.limit(20).startAfter(cursor))
      .get()
      .subscribe((resp) => {
        console.log("resp", resp);
        resp.docs.forEach((user) => {
          console.log(user.data());
          let peopleUser: IUser = user.data() as IUser;
          peopleUser.doc = user;
          if (peopleUser.uid !== this.currentUser.uid) {
            if (
              this.list.filter((p) => p.uid === peopleUser.uid).length === 0
            ) {
              this.list.push(peopleUser);
              console.log("new list", this.list);
            }
          }
        });
        // this.showList(this.selectedIndex);
        this.loadingService.dismissLoader();
        event.target.complete();
      });
  }

  private getCursor(prePend: boolean) {
    console.log("length", this.list.length, prePend);
    if (this.list.length) {
      return this.list[this.list.length - 1].doc;
    }
    return null;
  }

  /** search list of users by name and regroup into alphabet categories */
  public onSearch(val: string): void {
    let people: IUser[];
    this.fullList = this.fullTempList;
    if (val && val.trim() !== "") {
      this.isSearched = true;
      people = this.fullList.filter((item) => {
        if(item.displayName) {
          return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
        }
      });
    } else {
      this.isSearched = false;
      people = this.list;
    }
    console.log(this.fullList);
    console.log(people);
    this.fullList = people;
  }

  /** show either friends or all people based on tab selection */
  public showList(index: number) {
    this.selectedIndex = index;
    this.loadingService.presentProcessingLoading();
    if (index === 0) {
      this.groupedPeople = this.peopleService.groupPeople(this.list);
      this.loadingService.dismissLoader();
    } else {
      const friends = this.list.filter((user) =>
        this.friends && this.friends.length > 0
          ? this.friends.includes(user.uid)
          : null
      );
      this.groupedPeople = this.peopleService.groupPeople(friends);
      this.loadingService.dismissLoader();
    }
    console.log("group", this.groupedPeople);
  }

  /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
  public async manage(friend: IUser) {
    let loader = await this.loadCtrl.create({
      message: "",
      animated: true,
    });
    loader.present();
    if (isArray(this.friends) && this.friends.includes(friend.uid)) {
      await this.peopleService.unfollow(friend.uid).then(
        () => loader.dismiss(),
        (err) => loader.dismiss()
      );
    } else {
      await this.peopleService.follow(friend.uid).then(
        () => {
          loader.dismiss();
        },
        (err) => {
          loader.dismiss();
        }
      );
    }
    // this.showList(this.selectedIndex);
  }

  public isFriend(fid: string) {
    return isArray(this.friends) && this.friends.includes(fid);
  }

  /** open a persons profile */
  public async open(uid: string) {
    // const modal = await this.openModal(PersonComponent, uid, 'custom-modal');
    // modal.present();
    if (this.currentUser.uid === uid) {
      return;
    }
    let extras: NavigationExtras = {
      queryParams: {
        id: uid,
      },
    };
    this.navCtrl.navigateForward("profile", extras);
  }

  /** open action sheet with options for a person selection */
  public async openMore(contact: IUser): Promise<any> {
    const actionSheetCtrl = await this.actionSheetCtrl.create({
      header: this.translate.instant("other.options"),
      buttons: [
        {
          text: this.translate.instant("people-component.unfollow"),
          handler: () => {
            this.manage(contact);
          },
        },
        {
          text: this.translate.instant("people-component.open"),
          handler: () => {
            this.open(contact.uid);
          },
        },
        {
          text: this.translate.instant("people-component.call"),
          handler: () => {
            this.commonService.callUser(
              contact.mobile || contact.phone,
              this.callNumber
            );
          },
        },
        {
          text: this.translate.instant("people-component.chat"),
          handler: () => {
            this.messageService.startChat(contact);
          },
        },
        {
          text: this.translate.instant("other.cancel"),
          role: "cancel",
        },
      ],
    });
    await actionSheetCtrl.present();
  }

  /** scroll user to user group category */
  public scrollTo(item: string): void {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  public async getAllMessages() {
    return this.angularFire.collection<any>("messages").valueChanges();
  }

  /**
   * Filtering all messages
   * **/

  public async getFilteredMessages() {
    (await this.getAllMessages()).subscribe((data) => {
      this.messages = data;
      this.messages.forEach((msg) => {
        if (
          msg.participantsId.indexOf(this.currentUser.uid) !== -1 &&
          msg.last_sender !== this.currentUser.uid
        ) {
          this.messageCounter = 0;
          this.messageCounter = this.messageCounter + msg.unread_count;
        }
      });
    });
  }

  public goToNotifications() {
    this.goto(this.routes.notifications);
  }

  public goToMessages() {
    this.goto(this.routes.messages);
  }

  openMenu() {
    this.menuCtrl.enable(true, "first");
    this.menuCtrl.toggle("first");
  }
}
