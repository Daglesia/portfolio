<template>
  <v-breadcrumbs :theme="theme" :items="items" class="ml-4 txt-h6">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        class="text-subtitle-2 crumb-item"
        :disabled="item.disabled"
        exact
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
    <v-col class="text-right ma-0 pa-0">
      <v-btn
        icon
        @click="onClickSwitchThemeButton"
        variant="outlined"
        class="text-right"
        ><v-icon>{{
          !theme.global.current.value.dark
            ? "mdi:mdi-weather-sunny"
            : "mdi:mdi-weather-night"
        }}</v-icon></v-btn
      >
      <v-btn
        icon
        @click="onClickSwitchLocaleButton"
        variant="outlined"
        class="ml-2"
        ><v-icon>mdi:mdi-translate</v-icon></v-btn
      >
    </v-col>
  </v-breadcrumbs>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const items = computed(() => [
  {
    title: t("navigation_bar.about"),
    disabled: false,
    to: "/",
  },
  {
    title: t("navigation_bar.projects"),
    disabled: false,
    to: "/projects",
  },
  {
    title: t("navigation_bar.contact"),
    disabled: false,
    to: "/contact",
  },
]);

const theme = useTheme();
const locale = useI18n();

function onClickSwitchThemeButton() {
  theme.global.name.value = !theme.global.current.value.dark
    ? "coffeeDarkTheme"
    : "coffeeLightTheme";
}

function onClickSwitchLocaleButton() {
  const index = locale.availableLocales.findIndex(
    (loc) => loc === locale.locale.value
  );
  locale.locale.value =
    locale.availableLocales.at((index + 1) % locale.availableLocales.length) ??
    "";
}
</script>
