/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

// Plugins
import { registerPlugins } from "@/plugins";

import messages from "@/locales";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(i18n);

registerPlugins(app);

app.mount("#app");
