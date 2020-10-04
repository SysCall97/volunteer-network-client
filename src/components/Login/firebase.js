import * as firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBFEK3dcdL7MbUSFn2y31A6kZCkcG22mGA",
    authDomain: "volunteer-network-by-mashry.firebaseapp.com",
    databaseURL: "https://volunteer-network-by-mashry.firebaseio.com",
    projectId: "volunteer-network-by-mashry",
    storageBucket: "volunteer-network-by-mashry.appspot.com",
    messagingSenderId: "1000770774726",
    appId: "1:1000770774726:web:20ce53c3f6d3f2096c99c7"
  };

export const initializeLogInFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const newUser = {
                displayName: res.user.displayName,
                email: res.user.email,
                loggedIn: true,
                error: ""
            }
            return newUser;
        })
        .catch(error => {
            const newUserInfo = {
                loggedIn: false,
                error: error.message,
            };
            newUserInfo.isLoggedIn = false;
            return newUserInfo;
        });
}

export const signOut = () => {
    firebase.auth().signOut();
}