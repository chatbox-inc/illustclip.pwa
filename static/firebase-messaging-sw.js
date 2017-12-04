importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js')

firebase.initializeApp({messagingSenderId: ''}) //todo このID見えてもいいのか検討
firebase.messaging()

