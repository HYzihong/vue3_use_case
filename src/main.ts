import { createApp } from "vue";
import App from "./App.vue";
// css
// import "./styles/index.scss";
import "virtual:windi.css";
// plugins
import { setupStore } from "./stores";
import { setupRouter } from "./routers";

const APP = createApp(App);

// plugins
setupStore(APP);
setupRouter(APP);

APP.mount("#app");
