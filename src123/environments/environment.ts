// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * environment settings info
 * the firebase.hosting param is not from firebase, it is custom for wherever your ionic app is hosted and used by share functionality within the app for browsers.
 */
export const environment = {
  production: false,
  hosting: 'http://localhost:8100',
  googleClientId: '346346436-i6u333aesgdsgli32r8v96f9hb.apps.googleusercontent.com',
  firebaseConfig: {
   apiKey: 'AIzaSyA2kx6yOWOUW8kkwX74fNZ-x9_3MooHF7E',
    authDomain: 'iderby-music.firebaseapp.com',
    databaseURL: 'https://iderby-music.firebaseio.com',
    projectId: 'iderby-music',
    storageBucket: 'iderby-music.appspot.com',
    messagingSenderId: '46838646293'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
