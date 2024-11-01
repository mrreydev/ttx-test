<script setup>

import { computed } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const classes = computed(() => {
  const classNames = `btn-${props.color}`

  return classNames
})
</script>
<template>
  <button
    :type="type"
    class="btn"
    :class="classes"
  >
    <slot />
  </button>
</template>
<style lang="scss">
.btn {
  @apply px-3 py-2 transition-all duration-300 hover:border-2 hover:border-slate-800;

  &-primary {
    @apply bg-red-500 border-2 border-red-500 text-white;
  }

  &-secondary {
    @apply bg-slate-800 border-2 border-slate-800 text-white;
  }
}
</style>