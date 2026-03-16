import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";
import { key, store } from "./store";

const app = createApp(App);

app.component("DefaultLayout", DashboardLayout);
app.component("EmptyLayout", EmptyLayout);

app.use(router);
app.use(store, key);
app.mount("#app");
