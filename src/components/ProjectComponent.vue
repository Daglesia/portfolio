<template>
  <v-container class="project-component">
    <v-row no-gutters class="mt-4">
      <v-col :order="order" class="mr-8 ml-8" cols="5">
        <img class="rounded-xl" :src="props.project.imgSrc" />
      </v-col>
      <v-col>
        <v-card
          variant="outlined"
          class="rounded-xl project-description-card"
          :style="`text-align: ${props.project.imgPlacement};`"
        >
          <div class="text-h4 font-weight-bold ma-2">
            {{ props.project.title }}
          </div>
          <div class="font-weight-bold text-h6 ml-4 mr-4">
            {{ props.project.description }}
          </div>
          <icon-text-button
            @onClick="openInNewTab(props.project.url)"
            v-if="props.project.url"
            :data="buttonData"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ProjectComponentProps } from "@/types/types";
import IconTextButton from "@/components/IconTextButton.vue";
import TransitionFadeWrapper from "./TransitionFadeWrapper.vue";
import { openInNewTab } from "@/utils/utils";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  project: {
    type: Object as () => ProjectComponentProps,
    required: true,
  },
});

const order = computed(() =>
  props.project.imgPlacement === "left" ? "first" : "last"
);

const buttonData = computed(() => {
  return {
    text: t("projects_page.code_button"),
    iconSrc: "mdi:mdi-github",
  };
});
</script>

<style lang="scss" scoped>
.icon-text-button {
  margin-left: 8px;
}

.project-description-card {
  border: none;
  text-align: left;
}

img {
  height: 300px;
  width: inherit;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
</style>
