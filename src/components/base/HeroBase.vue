<script setup>
</script>
<template>
  <div class="base-hero">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.base-hero {
  @apply h-40 md:h-64 bg-cover bg-no-repeat bg-center flex justify-center items-center text-white text-2xl md:text-5xl font-semibold;
  background-image: url(@/assets/img/base-hero.jpg);
}
</style>