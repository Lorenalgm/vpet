import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCY2e3jS4hjvBBTCjo8Cv7GMzRaeDegvm4",
    authDomain: "vacinapet-unifap.firebaseapp.com",
    databaseURL: "https://vacinapet-unifap.firebaseio.com",
    projectId: "vacinapet-unifap",
    storageBucket: "vacinapet-unifap.appspot.com",
    messagingSenderId: "1087966058691",
    appId: "1:1087966058691:web:158055741943e7ef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database;