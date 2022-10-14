import { createApp } from "vue";
import "./tailwind.css";
import "./style.scss";
import App from "./App.vue";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App).use(store).use(VueSweetalert2).mount("#app");
