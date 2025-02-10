import { createApp } from 'vue'
import './style.css'
import router from "./router"
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const app =  createApp(App)


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
  };


  
// Initialize Firebase
initializeApp(firebaseConfig);
// const getAuth = getAuth(app);
// const analytics = getAnalytics(apps);

app.use(router)
app.use(ElementPlus)
app.use(App).mount('#app')
