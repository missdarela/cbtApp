import { createApp } from "vue";
import "./style.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// Import Firebase initialization
import "./firebase";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.mount("#app");