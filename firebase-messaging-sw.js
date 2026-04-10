importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBUkm6nhbm8ezTTJDaXvHdZxQFDbcjS9GU",
  projectId: "wesportlive-e5507",
  messagingSenderId: "550050377587",
  appId: "1:550050377587:web:7f7dcdccac34ace5f7df06"
});

const messaging = firebase.messaging();
