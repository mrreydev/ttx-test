<script setup>
defineProps({
  agent: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <div
    :key="agent.id"
    class="agent-card flex flex-col relative p-4 bg-center bg-no-repeat bg-contain"
    :style="{
      backgroundImage: `url('${agent.background}')`
    }"
  >
    <img :src="agent.bustPortrait" :alt="agent.displayName" class="agent-image object-cover">
    <div class="agent-name p-3 md:p-4 bg-slate-900/50 absolute inset-x-0 bottom-0 transform flex items-center justify-between">
      <p class="text-sm md:text-base text-white font-bold uppercase">
        {{ agent.displayName }}
      </p>
      <img :src="agent.role.displayIcon" :alt="`Icon ${agent.role.displayName}`" class="w-6">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.agent-card {
  &:hover {
    .agent-image {
      @apply transition-all duration-300 scale-110;
    }

    .agent-name {
      @apply transition-all duration-300 bg-slate-900/90;
    }
  }
}
</style>