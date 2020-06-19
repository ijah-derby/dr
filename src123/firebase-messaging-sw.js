importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '46838646293' // add your own messagingSenderId from firebase config
});

const messaging = firebase.messaging();
