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
    apiKey: "AIzaSyAulGVzjguayfqgpj-4keyneP_UMIzpagc",
    authDomain: "cbt-training-3ff44.firebaseapp.com",
    projectId: "cbt-training-3ff44",
    storageBucket: "cbt-training-3ff44.firebasestorage.app",
    messagingSenderId: "183381617575",
    appId: "1:183381617575:web:eba4556ff7ad0b4893a482",
    measurementId: "G-ZQ3SN8Q7YH"
  };


  
// Initialize Firebase
initializeApp(firebaseConfig);
// const getAuth = getAuth(app);
// const analytics = getAnalytics(apps);

app.use(router)
app.use(ElementPlus)
app.use(App).mount('#app')
