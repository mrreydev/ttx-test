<script setup>
defineProps({
  weapon: {
    type: Object,
    default: () => ({})
  },
  uppercase: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="weapon-card flex flex-col justify-center p-4 border border-slate-300">
    <img :src="weapon.displayIcon" alt="Weapon Display Icon" class="weapon-image h-16 object-contain mb-3">
    <p class="text-sm md:text-base" :class="{'uppercase': uppercase}">
      {{ weapon.displayName }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.weapon-card {
  &:hover {
    .weapon-image {
      @apply transition-all duration-300 scale-110;
    }

    .agent-name {
      @apply transition-all duration-300 bg-slate-900/90;
    }
  }
}
</style>