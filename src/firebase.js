import firebase from "firebase/app" // 5
import "firebase/auth" // 6

// 7 
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC47X4WO-GuU-bjs3dV4cY2Ktmk4EBVK_0",
    authDomain: "chatbot-d0089.firebaseapp.com",
    projectId: "chatbot-d0089",
    storageBucket: "chatbot-d0089.appspot.com",
    messagingSenderId: "775540331537",
    appId: "1:775540331537:web:c4d2294f6b7e33c5d94db0"
  }).auth();