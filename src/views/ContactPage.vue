<template>
  <transition-wrapper :transition="Transition.SLIDE_FADE">
    <div class="text-center justify-center">
      <h1 class="txt-h2 font-weight-bold">
        {{ $t("contact_page.title") }}
      </h1>
      <div>
        <div class="txt-body-1 font-weight-bold">
          {{ $t("contact_page.description") }}
        </div>
        <v-container class="justify-center">
          <v-row
            v-for="contact in possibleContacts"
            class="ma-4 txt-body-1"
            :key="contact.icon"
          >
            <v-icon :icon="contact.icon" size="x-large" class="mr-2"></v-icon
            >{{ contact.value }}
          </v-row>
        </v-container>
        <div class="txt-body-1 font-weight-light mb-2">
          {{ $t("contact_page.footnote") }}
        </div>
      </div>
    </div>
  </transition-wrapper>
</template>

<script lang="ts" setup>
import TransitionWrapper from "@/components/TransitionWrapper.vue";
import { Transition } from "@/types/transitions";

const possibleContacts = [
  { icon: "mdi:mdi-email", value: "daglesia.social<at>gmail.com" },
  { icon: "fa-brands fa-discord", value: "Daglesia#4220" },
  {
    icon: "fa-brands fa-github",
    value: "Daglesia",
  },
  { icon: "fa-brands fa-reddit", value: "Daglesia" },
];
</script>

<style lang="scss" scoped>
.v-container {
  width: 30%;
}

.v-icon {
  font-size: x-large;
  width: 1.5em;
}
.v-row {
  align-items: center;
}
</style>
