import { Component, Injector, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AuthService} from '../../pages/auth/services/auth/auth.service';
import {SettingService} from '../../pages/setting/services/setting/setting.service';
import {Extender} from '../../shared/helpers/extender';
import {FcmService} from '../../shared/services/fcm/fcm.service';
import { AppService, IAppPages } from '../services/app/app.service';
import { CurrenciesProvider } from 'src/pages/Shopping/providers/currencies';
import { ToastController, MenuController, Events } from '@ionic/angular';
import { UsersProvider } from 'src/pages/Shopping/providers/users';
import { environment } from 'src/environments/environment';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';




/**
 * @class AppComponent
 * @extends Extender
 * @implements OnInit
 * sets pages for side-menu when user is logged in. default color used here to style side-menu buttons in a gradient.
 * here we set and store default language to english until user can make changes either in welcome page or from user settings.
 * we also register fire cloud messaging and token and listen for notifications in-app.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends Extender implements OnInit {
  public pages = [];
  public color: string = '#ffffff';

  menu = [];
  user: any;
  
  

  constructor(
    private spinnerDialog: SpinnerDialog,
    private themeableBrowser: ThemeableBrowser,
    protected injector: Injector,
    private appService: AppService,
    private authService: AuthService,
    private fcmService: FcmService,
    private settingService: SettingService,
    private storage: Storage,
    public currenciesProv: CurrenciesProvider,
    public menuCtrl: MenuController, 
    public events: Events,
    public usersProv: UsersProvider
  ) {
    super(injector);
    this.menu = environment.menu;

  
    
   



    // const bannerConfig: AdMobFreeBannerConfig = {
    //   id: 'ca-app-pub-3940256099942544/6300978111',
    //   isTesting: true,
    //   autoShow: true
    // };
    // this.admobFree.banner.config(bannerConfig);
    // this.admobFree.banner.prepare().then(() => {}).catch(e => console.log(e));



    this.events.subscribe('user: change', (user) => {
      if(user || user != null){
        console.log('userchange');
        console.log(user);
        this.user = user;
        this.router.navigateByUrl('home');
        this.menuCtrl.enable(true);
      }else{
        // this.router.navigateByUrl('login');
        this.goto(this.routes.login);
        this.menuCtrl.enable(false);
      }
    });


    this.storage.ready().then(() => {
      this.storage.get('user').then((val) => {
        console.log(val);
        if(val != null){
          this.user = val;
          // this.router.navigateByUrl('home');
          this.menuCtrl.enable(true, 'first');
          this.menuCtrl.enable(true, 'second');
        }else{
          // this.router.navigateByUrl('login');
          this.menuCtrl.enable(false, 'first');
          // this.menuCtrl.enable(false, 'second');
        }
      })
    })
  }

  /**
   * run initializeApp from appServices
   * get language from localstorage, if language is set, use to configure translations
   * otherwise default to english (gb)
   * if user is logged in, get firebase cloud messaging token and listen for notifications
   * setup app pages
   * get user preferences to setup lang
   */
  public async ngOnInit() {
    this.appService.initializeApp();
    this.user = await this.authService.getUser();
    const lang = await this.storage.get('language');
    this.appService.langConfig(lang);
    this.subscriptions.push(
      this.authService.user.subscribe((user) => {
        if (user) {
          this.fcmService.getToken().then(() => {
            this.listen4Notifications();
          });
          this.subscriptions.push(
            this.settingService.getUserSettings(user.uid).subscribe((setting) => this.appService.langConfig(setting.language))
          );
          this.pages = this.appService.setUpPages(user);
        
          }
      })
    );
  }

  openDuck() {
    // https://ionicframework.com/docs/native/themeable-browser/
    const options: ThemeableBrowserOptions = {
      statusbar: {
        color: '#ffffff'
    },
    toolbar: {
        height: 50,
        color: '#ffffff'
    },
    title: {
        color: '#003264ff',
        showPageTitle: false
    },
    backButton: {
      wwwImage: 'assets/imgs/back.png',
      align: 'left',
      event: 'backPressed'
    },

    closeButton: {
      wwwImage: 'assets/imgs/stop.png',
      align: 'left',
      event: 'closePressed'
    },
    customButtons: [
        {
    
          wwwImage: 'assets/images/logo1br.png',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
};
  
const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://start.duckduckgo.com', '_self', options);
  
browser.on('closePressed').subscribe(data => {
  browser.close();

})

  browser.on('loadstart').subscribe((eve) => {
    this.spinnerDialog.show(null, null, true);     
  }, err => {
    this.spinnerDialog.hide();
  })
  
  browser.on('loadstop').subscribe(()=>{
    this.spinnerDialog.hide();
  }, err =>{
    this.spinnerDialog.hide();
  })
  
  browser.on('loaderror').subscribe(()=>{
    this.spinnerDialog.hide();
  }, err =>{
    this.spinnerDialog.hide();
  })
  
  browser.on('exit').subscribe(()=>{
    this.spinnerDialog.hide();
  }, err =>{
    this.spinnerDialog.hide();
  })


  }
  



  /**
   * open component pages except for when component property is logout
   * then logout user from app and route to login page
   * @param page
   */
  public open(page: IAppPages) {
    if (page.component === 'logout') {
      this.authService.signOut().then(() => this.goto(this.routes.login));
    } else {
      this.goto(page.component);
    }
  }

  /* Listen to incoming messages */
  private listen4Notifications() {
    this.subscriptions.push(this.fcmService.listenToNotifications().subscribe());
  }

  // async presentToast(msg) {
  //   const toast = await this.toastCtrl.create({
  //     message: msg.body,
  //     duration: 3000,
  //     position: 'top'
  //   });
  //   toast.present();
  // }

  logout() {
    this.usersProv.logoutUser().then(() => {
      this.storage.remove('user');
      this.user = null;
      this.storage.remove('cart_list');
      this.menuCtrl.enable(false);
      this.authService.signOut().then(() => this.goto(this.routes.login));
    });
  }

  openUrl(url: string) {
    console.log('url clicked');
    window.open(url, '_system');
  }
}
