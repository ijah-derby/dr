/**
 * native add ons all in one place
 * export to appModule Providers
 */
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Base64 } from '@ionic-native/base64/ngx';



import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AboutProvider } from 'src/pages/Shopping/providers/about';
import { CategoriesProvider } from 'src/pages/Shopping/providers/categories';
import { PostsProvider } from 'src/pages/Shopping/providers/posts';
import { ProductsProvider } from 'src/pages/Shopping/providers/products';
import { UsersProvider } from 'src/pages/Shopping/providers/users';
import { OrdersProvider } from 'src/pages/Shopping/providers/orders';
import { ContactsProvider } from 'src/pages/Shopping/providers/contacts';
import { SettingsProvider } from 'src/pages/Shopping/providers/settings';
import { CurrenciesProvider } from 'src/pages/Shopping/providers/currencies';
import { UploadProvider } from 'src/pages/Shopping/providers/upload';
import { FcmProvider } from 'src/pages/Shopping/providers/fcm';
import { FavoritesProvider } from 'src/pages/Shopping/providers/favorites';
import { ThemeProvider } from 'src/pages/Shopping/providers/theme';

export const NativeImports = [
  StatusBar,
  SplashScreen,
  Facebook,
  GooglePlus,
  FirebaseX,
  Camera,
  CallNumber,
  ImagePicker,
  Geolocation,
  SocialSharing,
  Diagnostic,
  File,
  WebView,
  Base64,
  AboutProvider,
  CategoriesProvider,
  PostsProvider,
  ProductsProvider,
  UsersProvider,
  OrdersProvider,
  ContactsProvider,
  SettingsProvider,
  CurrenciesProvider,
  UploadProvider,
  FcmProvider,
  FavoritesProvider,
  ThemeProvider,
  Facebook,
  Stripe,
  CallNumber,
  SocialSharing,
  PayPal,
  InAppBrowser,
  Camera,
  AdMobFree,
  File,
];
