/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, fa } from "vuetify/iconsets/fa";
import "vuetify/styles";

// Composables
import { createVuetify, ThemeDefinition } from "vuetify";

/* add icons to the library */
//library.add(faUserSecret);

// https://colorhunt.co/palette/f8ede3dfd3c3d0b8a885586f

const coffeeLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#F8EDE3",
    accent: "#85586F",
    secondary: "#F8EAD8",
  },
};

// https://colorhunt.co/palette/1a120b3c2a21d5cea3e5e5cb

const coffeeDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#1A120B",
    accent: "#E5E5CB",
    secondary: "3C2A21",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "coffeeLightTheme",
    themes: {
      coffeeLightTheme,
      coffeeDarkTheme,
    },
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
