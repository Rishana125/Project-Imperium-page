import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5NVnwmogrnAveNISIIeV9Q1k_tubMSdA",
    authDomain: "project-page-3456d.firebaseapp.com",
    databaseURL: "https://project-page-3456d.firebaseio.com",
    projectId: "project-page-3456d",
    storageBucket: "project-page-3456d.appspot.com",
    messagingSenderId: "792105353637",
    appId: "1:792105353637:web:4858dd1ca74b5761c7a84c"
};

export default firebase.initializeApp(config);
// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
