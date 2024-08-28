import { createApp } from "vue";
import App from "./App.vue";
import vueEsign from "./components/index"

const app = createApp(App);

app.component('vueEsign',vueEsign)

app.mount("#app");
