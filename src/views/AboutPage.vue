<template>
  <v-container>
    <transition-fade-wrapper>
      <profile-pic-card class="mb-8" />
      <icon-array-card />
    </transition-fade-wrapper>
  </v-container>
</template>

<script lang="ts" setup>
import ProfilePicCard from "@/components/ProfilePicCard.vue";
import IconArrayCard from "@/components/IconArrayCard.vue";
import ProjectsPage from "./ProjectsPage.vue";
import TransitionFadeWrapper from "@/components/TransitionFadeWrapper.vue";
import { onMounted, ref } from "vue";
</script>

<style lang="scss" scoped>
.profile-pic-card {
  height: 100%;
  width: 100%;
}
.icon-array-card {
  margin: auto;
}
</style>
