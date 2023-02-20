<template>
  <div class="text-center welcome-card justify-center">
    <div class="txt-body-1 font-weight-light mb-2">
      {{ $t("welcome_card.welcome") }}
    </div>

    <h1 class="txt-h2 font-weight-bold">
      {{ $t("welcome_card.name") }}
    </h1>
    <div>
      <div class="v-card-holder">
        <arrow-icon-circular />
        <v-card class="ma-2 mr-auto ml-auto">
          <v-img src="@/assets/images/profilepicture.jpg" />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArrowIconCircular from "@/assets/icons/ArrowIconCircular.vue";
</script>

<style lang="scss" scoped>
.v-card-holder {
  max-height: 30em;
  max-width: 30em;
  margin: auto;
}
.v-card {
  border-radius: 50% !important;
  max-height: 30em;
  max-width: 30em;
}
.v-container {
  padding: 0;
}
.arrow-icon-circular {
  left: 25em;
}

.v-img {
  max-height: none !important;
  max-width: none !important;
}
</style>
