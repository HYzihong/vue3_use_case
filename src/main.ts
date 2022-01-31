import { createApp } from "vue";
import App from "./App.vue";
// css
// import "./styles/index.scss";
import "virtual:windi.css";
import "element-plus/theme-chalk/index.css";
// plugins
import { setupStore } from "./stores";
import { setupRouter } from "./routers";
import { setupUICpmps } from "./plugins/elements-plus";

const APP = createApp(App);

// plugins
setupStore(APP);
setupRouter(APP);
setupUICpmps(APP);

APP.mount("#app");
