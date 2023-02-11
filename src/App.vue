<template>
  <v-app>
    <transition-wrapper :transition="Transition.FADE">
      <navigation-bar />
    </transition-wrapper>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { Transition } from "@/types/transitions";
import NavigationBar from "@/components/NavigationBar.vue";
import LazyComponentWrapper from "./components/LazyComponentWrapper.vue";
import TransitionWrapper from "@/components/TransitionWrapper.vue";
</script>
