<template>
  <transition-fade-wrapper>
    <div class="text-center justify-center">
      <h1 class="txt-h2 font-weight-bold">
        {{ $t("contact_page.title") }}
      </h1>
      <div class="txt-body-1 font-weight-bold mb-2">
        {{ $t("contact_page.description") }}
      </div>
      <v-container class="justify-center">
        <v-row v-for="contact in possibleContacts" class="ma-4">
          <v-icon :icon="contact.icon" size="x-large" class="mr-2"></v-icon
          >{{ contact.value }}
        </v-row>
      </v-container>
      <div class="txt-body-1 font-weight-light mb-2">
        {{ $t("contact_page.footnote") }}
      </div>
    </div>
    <v-icon icon="fas:fa-check" />
  </transition-fade-wrapper>
</template>

<script lang="ts" setup>
import TransitionFadeWrapper from "@/components/TransitionFadeWrapper.vue";
import { splitArrayToChunks } from "@/utils/utils";

const possibleContacts = [
  { icon: "mdi:mdi-email", value: "daglesia.social<at>gmail.com" },
  { icon: "fas fa-discord", value: "daglesia.sat>gmail.com" },
  { icon: "mdi:mdi-email", value: "daglesia.social<at>gmail.kkkkkkkkkkcom" },
  { icon: "mdi:mdi-email", value: "daglesia.social<at>gmail.comm" },
  { icon: "mdi:mdi-email", value: "dagles" },
];
</script>

<style lang="scss" scoped>
.v-container {
  width: 30%;
}

.v-row {
  align-items: center;
}
</style>
