import {initializeApp} from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCy8EKEX8bpLFMMhhJuUTMgy-DlhJ97E1E",
    authDomain: "naukari-app-512df.firebaseapp.com",
    projectId: "naukari-app-512df",
    storageBucket: "naukari-app-512df.firebasestorage.app",
    messagingSenderId: "81876146293",
    appId: "1:81876146293:web:ad9dc030714b4ef740803c",
    databaseURL: "https://naukari-app-512df-default-rtdb.firebaseio.com/"
  };
export const app= initializeApp(firebaseConfig)  