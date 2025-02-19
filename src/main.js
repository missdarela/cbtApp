import { createApp } from 'vue'
import './style.css'
import router from "./router"
import { createPinia } from 'pinia'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()

import { initializeApp } from "firebase/app";




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
app.use(pinia)
app.use(App).mount('#app')
