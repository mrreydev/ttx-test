<script setup>
</script>
<template>
  <section id="hero" class="hero-homepage">
    <div class="w-full h-full bg-slate-900/45 absolute top-0"></div>
    <div class="absolute z-10 flex flex-col justify-center inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-max">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">VALORANT</h1>
      <p class="text-base text-white mb-4">
        Tactical 5v5 First Person Shooter Game
      </p>
      <Button class="w-fit mx-auto">
        PLAY NOW!
      </Button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.hero-homepage {
  @apply min-h-screen bg-cover bg-center bg-no-repeat relative;
  background-image: url(@/assets/img/hero-home.png);
}
</style>