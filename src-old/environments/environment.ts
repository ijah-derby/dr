// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * environment settings info
 * the firebase.hosting param is not from firebase, it is custom for wherever your ionic app is hosted and used by share functionality within the app for browsers.
 */
export const environment = {
  production: false,
  hosting: 'https://app.dontramp.com',
  googleClientId: '346346436-i6u333aesgdsgli32r8v96f9hb.apps.googleusercontent.com',
  firebaseConfig: {
   apiKey: 'AIzaSyA2kx6yOWOUW8kkwX74fNZ-x9_3MooHF7E',
    authDomain: 'iderby-music.firebaseapp.com',
    databaseURL: 'https://iderby-music.firebaseio.com',
    projectId: 'iderby-music',
    storageBucket: 'iderby-music.appspot.com',
    messagingSenderId: '46838646293',
    appId: '1:46838646293:android:031018036ca5e25b'
	// apiKey: "AIzaSyAjiaOdlpdEaItO4p8nmCKsB8GoiFYtcXw",
	// authDomain: "drshop-ce5f6.firebaseapp.com",
	// databaseURL: "https://drshop-ce5f6.firebaseio.com",
	// projectId: "drshop-ce5f6",
	// storageBucket: "drshop-ce5f6.appspot.com",
	// messagingSenderId: "753908469295",
	// appId: "1:753908469295:web:98ecd65aa37edd849640da",
	// measurementId: "G-56W3PXXCJ9"
  },
  AdMobFreeBannerConfig: {
		isTesting: true,
 		autoShow: true
	},
	firebase: {
		apiKey: "AIzaSyBrEQBQiA6GCHH4eq36VRX018DlOogLnlE",
		authDomain: "kiwi-7699a.firebaseapp.com",
		databaseURL: "https://kiwi-7699a.firebaseio.com",
		projectId: "kiwi-7699a",
		storageBucket: "kiwi-7699a.appspot.com",
		messagingSenderId: "976172698650"
	},
	stripe_publish_key: 'pk_test_nqykHcHCdCnWPJCD6pguqShK',
	google_project_number: '762391382612',
	fb_app: 571610369618746,
	fb_v: "v3.2",
	paypal_sandbox_client_id: "Ac-QK_Lkar46qQDWcp1kega6aPk13SxXv3dkCVX7A2Nlw7BViP3JyDUQQg-6W386yjgaeEHTuaO9BxGx",
	paypal_live_client_id: "",
	languages: {
   		'en':'English',
   		'vi':'Vietnamese'
	},
	menu: [{
		name: 'Home',
		path: '/home',
		component: 'HomePage',
		icon: 'ios-home',
	},{
		name: 'Shop',
		path: '/shop',
		component: 'ShopPage',
		icon: 'ios-shirt',
	},{
		name: 'About',
		path: '/about',
		component: 'AboutPage',
		icon: 'ios-albums',
	},{
		name: 'Blog',
		path: '/blog',
		component: 'BlogPage',
		icon: 'md-paper',
	},{
		name: 'Favorites',
		path: '/favorites',
		component: 'FavoritesPage',
		icon: 'md-heart-empty',
	},{
		name: 'Mycart',
		path: '/mycart',
		component: 'MycartPage',
		icon: 'md-basket',
	},{
		name: 'Myorders',
		path: '/myorder',
		component: 'MyorderPage',
		icon: 'md-clipboard',
	},{
		name: 'Offer',
		path: '/offer',
		component: 'OfferPage',
		icon: 'md-gift',
	},{
		name: 'Profile',
		path: '/profile',
		component: 'ProfilePage',
		icon: 'ios-contact',
	},{
		name: 'Setting',
		path: '/setting',
		component: 'SettingPage',
		icon: 'ios-settings',
	}],
	themes: [{
		name:'Light',
		primary: '#555555',
		secondary: '#a1a1a1',
		tertiary: '#cccccc',
		light: '#e1e1e1',
		medium: '#7d7d7d',
		dark: '#111111'
	},{
		name:'Gray',
		primary: '#9e9e9e',
		secondary: '#808080',
		tertiary: '#bbbbbb',
		light: '#e1e1e1',
		medium: '#838383',
		dark: '#333333'
	},{
		name:'Dark',
		primary: '#f2f2f2',
		secondary: '#a1a1a1',
		tertiary: '#cccccc',
		light: '#111111',
		medium: '#7d7d7d',
		dark: '#e1e1e1'
	},{
		name:'Red',
		primary: '#EF5350',
		secondary: '#78be97',
		tertiary: '#ed553b',
		light: '#fde8df',
		medium: '#fcd0a2',
		dark: '#1a1415'
	},{
		name:'Pink',
		primary: '#F50057',
		secondary: '#0266be',
		tertiary: '#f67280',
		light: '#f5d8d7',
		medium: '#f59e9d',
		dark: '#1a1415'
	},{
		name:'Purple',
		primary: '#673ab7',
		secondary: '#5fd9cd',
		tertiary: '#7c4dff',
		light: '#ded5ef',
		medium: '#8e76b8',
		dark: '#16141a'
	},{
		name:'Indigo',
		primary: '#3f51b5',
		secondary: '#5fbf43',
		tertiary: '#536dfe',
		light: '#d6d9ec',
		medium: '#747eb5',
		dark: '#14151a'
	},{
		name:'Blue',
		primary: '#03a9f4',
		secondary: '#ddd145',
		tertiary: '#40c4ff',
		light: '#d7ebf5',
		medium: '#9dd9f5',
		dark: '#14181a'
	},{
		name:'Cyan',
		primary: '#00bcd4',
		secondary: '#eba669',
		tertiary: '#18ffff',
		light: '#c9f0f5',
		medium: '#87cbd4',
		dark: '#14191a'
	},{
		name:'Teal',
		primary: '#4caf50',
		secondary: '#e06768',
		tertiary: '#69f0ae',
		light: '#c9e6e4',
		medium: '#71b073',
		dark: '#141a15'
	},{
		name:'Green',
		primary: '#a5c331',
		secondary: '#ff5a65',
		tertiary: '#45ba25',
		light: '#e3efd5',
		medium: '#b4c27c',
		dark: '#181a14'
	},{
		name:'Yellow',
		primary: '#ffeb3b',
		secondary: '#f37e6e',
		tertiary: '#ffff8d',
		light: '#fffce0',
		medium: '#fff6a3',
		dark: '#1a1914'
	},{
		name:'Orange',
		primary: '#ff9800',
		secondary: '#7d65e8',
		tertiary: '#ffab40',
		light: '#fff3e0',
		medium: '#ffdaa3',
		dark: '#1a1714'
	},{
		name:'Brown',
		primary: '#795548',
		secondary: '#005ba8',
		tertiary: '#a1887f',
		light: '#e7d6d0',
		medium: '#78584d',
		dark: '#1a1614'
	}],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
