<template>
  <v-btn
    variant="outlined"
    :prepend-icon="props.data.iconSrc"
    class="text-h6 font-weight-bold ma-2"
    size="large"
    @click="$emit('onClick')"
    >{{ props.data.text }}</v-btn
  >
</template>

<script lang="ts" setup>
import { IconTextButtonProps } from "@/types/types";
const props = defineProps({
  data: {
    type: Object as () => IconTextButtonProps,
    required: true,
  },
});
</script>
