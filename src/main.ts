import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";

const pinia = createPinia();

createApp(App).use(pinia).use(i18n).mount("#app");
