import { createApp } from "vue";
import "./style.css";

import router from "./router";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// Import Firebase initialization
import "./firebase";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");