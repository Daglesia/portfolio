<template>
  <transition-wrapper :transition="Transition.SLIDE_FADE">
    <h1 class="txt-h2 font-weight-bold mb-10 text-center">
      {{ $t("projects_page.text") }}
    </h1>
    <v-carousel hide-delimiters>
      <v-carousel-item cover v-for="array in splitArray">
        <project-component
          v-for="project in array"
          :key="project.title"
          :project="project"
        />
      </v-carousel-item>
    </v-carousel>
  </transition-wrapper>
</template>

<script lang="ts" setup>
import ProjectComponent from "@/components/ProjectComponent.vue";
import TransitionWrapper from "@/components/TransitionWrapper.vue";

import Image1 from "@/assets/images/project1.webp";
import ImageDiscord from "@/assets/images/projectDiscord.png";

import { splitArrayToChunks } from "@/utils/utils";
import { Transition } from "@/types/transitions";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const getProjectTranslatedInfo = (projectName: string) => {
  const title = `projects_page.projects.${projectName}.title`;
  const description = `projects_page.projects.${projectName}.description`;

  return { title: t(title), description: t(description) };
};

const projects = computed(() => {
  const projectsArray = [
    {
      ...getProjectTranslatedInfo("guildwars2"),
      imgSrc: Image1,
      url: "https://google.com",
    },
    {
      ...getProjectTranslatedInfo("discord_bot"),
      imgSrc: ImageDiscord,
      url: "https://github.com/Daglesia/discord-annoy-o-bot",
    },
  ];
  return projectsArray.map((project, index) => {
    return { ...project, imgPlacement: index % 2 ? "left" : "right" };
  });
});

const splitArray = computed(() => splitArrayToChunks(projects.value, 2));
</script>

<style lang="scss" scoped>
.project-component {
  margin: auto;
}
.v-carousel {
  height: auto !important;
}
</style>
