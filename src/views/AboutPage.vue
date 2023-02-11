<template>
  <transition-fade-wrapper>
    <v-container>
      <profile-pic-card class="mb-8" />
      <icon-array-card />
    </v-container>
  </transition-fade-wrapper>
</template>

<script lang="ts" setup>
import ProfilePicCard from "@/components/ProfilePicCard.vue";
import IconArrayCard from "@/components/IconArrayCard.vue";
import TransitionFadeWrapper from "@/components/TransitionFadeWrapper.vue";
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
