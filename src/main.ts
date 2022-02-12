import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import { Quasar } from "quasar";
import quasarLang from "quasar/lang/ja";
import { createApp } from "vue";

import App from "@/App.vue";

import router from "./router";

const app = createApp(App);

app.use(router);
app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
});

app.mount("#app");
