<script setup>
import { shallowRef } from 'vue';
const menus = shallowRef([
  {
    id: 1,
    label: 'Agents',
    redirect: '/agents'
  },
  {
    id: 2,
    label: 'Weapons',
    redirect: '/weapons'
  },
  {
    id: 3,
    label: 'Maps',
    redirect: '/#'
  },
  {
    id: 4,
    label: 'Rankings',
    redirect: '/#'
  },
])
</script>
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/">
        <img src="@/assets/logo.svg" alt="Valorant Logo">
      </RouterLink>
      <RouterLink v-for="(menu, index) in menus" :key="menu.id" :to="`${menu.redirect}`" class="nav-item" :class="{'ms-auto': index === 0}">
        {{ menu.label }}
      </RouterLink>
      <Button
        class="ms-auto hidden md:block"
      >
        PLAY NOW!
      </Button>
    </div>
  </nav>
</template>
<style lang="scss">
.navbar {
  @apply bg-slate-100 py-4 md:py-6 sticky top-0 z-20 shadow-md;

  .navbar-container {
    @apply container mx-auto flex gap-4 md:gap-10 items-center;

    .nav-item {
      @apply text-xs md:text-base md:ms-0 font-semibold uppercase transition-all ease-in-out duration-300 hover:underline;
    }
  }
}
</style> 