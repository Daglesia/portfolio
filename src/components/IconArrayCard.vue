<template>
  <div class="pb-4 icon-array-card">
    <v-card class="rounded-xl">
      <v-row>
        <v-col v-for="icon in icons" :key="icon">
          <v-icon class="mt-3 mb-2" :icon="icon" />
        </v-col>
      </v-row>
    </v-card>
    <arrow-icon-bottom />
  </div>
</template>

<script lang="ts" setup>
import ArrowIconBottom from "@/assets/icons/ArrowIconBottom.vue";

const icons = [
  "mdi:mdi-language-html5",
  "mdi:mdi-language-css3",
  "mdi:mdi-language-typescript",
  "mdi:mdi-sass",
  "mdi:mdi-language-python",
  "mdi:mdi-aws",
  "mdi:mdi-github",
  "mdi:mdi-jira",
];
</script>

<style lang="scss" scoped>
.v-col {
  display: flex;
  justify-content: center;
}
.arrow-icon-bottom {
  bottom: 200px;
  left: 80px;
}

.v-row {
  padding-right: 5px;
  padding-left: 5px;
}

i {
  font-size: 80px;
  color: rgb(var(--v-theme-accent));
}
</style>
