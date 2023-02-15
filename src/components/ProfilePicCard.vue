<template>
  <div class="text-center welcome-card justify-center">
    <div class="txt-body-1 font-weight-light mb-2">
      {{ $t("welcome_card.welcome") }}
    </div>

    <h1 class="txt-h2 font-weight-bold">
      {{ $t("welcome_card.name") }}
    </h1>
    <v-container>
      <arrow-icon-circular />
      <v-card class="ma-2 mr-auto ml-auto">
        <v-img src="@/assets/images/profilepicture.jpg" />
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import ArrowIconCircular from "@/assets/icons/ArrowIconCircular.vue";
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 50% !important;
  max-height: 500px;
  max-width: 500px;
  height: auto;
  width: auto;
}
.v-container {
  max-width: 500px;
  padding: 0px;
}
.arrow-icon-circular {
  left: 420px; // nice
}

.v-img {
  max-height: none !important;
  max-width: none !important;
}
</style>
