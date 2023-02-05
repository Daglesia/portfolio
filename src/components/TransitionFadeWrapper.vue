<template>
  <transition-group name="slide-fade" appear>
    <slot />
  </transition-group>
</template>

<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
