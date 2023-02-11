<template>
  <v-app>
    <navigation-bar />
    <router-view />
    <lazy-component-wrapper />
  </v-app>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar.vue";
import LazyComponentWrapper from "./components/LazyComponentWrapper.vue";
</script>
