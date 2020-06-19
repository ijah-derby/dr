import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { createTranslateLoader, IonicGestureConfig } from 'src/shared/helpers/config';
import { NativeImports } from 'src/shared/helpers/native';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FeedDetailComponent } from 'src/pages/feed/components/feed-detail/feed-detail.component';
import { PersonComponent } from 'src/pages/people/components/person/person.component';
import { FeedCommentComponent } from 'src/pages/feed/components/feed-comment/feed-comment.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

/**
 * bootstrap app component and add all the modules required in this app
 * HttpClientModule to allow making http calls
 * IonicModule sets mode to md to default styles to material design across devices and ripple effect for material design is disabled
 * Ionic storage is used to store device specific settings in localstorage
 * Angular Firebase modules are also imported her at the root and we initialize firebase settings
 * shared module is a custom module that exports all shared components, directives, modules and pipes.
 *
 * NativeImports is a neat way to handle all cordova plugins in a separate file
 * configure hammer gesture for more touch effects like long press, pinch, span etc
 */
@NgModule({
  declarations: [AppComponent, FeedDetailComponent, PersonComponent, FeedCommentComponent],
  entryComponents: [FeedDetailComponent, PersonComponent, FeedCommentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [
    NativeImports,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
