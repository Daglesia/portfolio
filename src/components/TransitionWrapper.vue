<template>
  <transition :name="props.transition" appear>
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import { Transition } from "@/types/transitions";
const props = defineProps({
  transition: {
    type: String,
    required: true,
  },
});

console.log(props);
</script>
