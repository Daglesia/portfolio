<template>
  <transition-group :name="props.transition" appear>
    <slot />
  </transition-group>
</template>

<script lang="ts" setup>
const props = defineProps({
  transition: {
    type: String,
    required: true,
  },
});
</script>
