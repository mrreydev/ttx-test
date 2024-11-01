<script setup>
import { useWeaponStore } from '@/stores/weapon'
import { onMounted, ref } from 'vue';

const weaponStore = useWeaponStore()

const weapons = ref([])
const fetchWeapons = async () => {
  try {
    const resp = await weaponStore.getWeapons()
    weapons.value = resp.data.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchWeapons()
})
</script>
<template>
  <HeroBase>
    WEAPONS LOADOUT
  </HeroBase>
  <div class="bg-slate-100">
    <div class="container mx-auto py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
        <RouterLink v-for="weapon in weapons" :key="weapon.id" :to="`/weapons/${weapon.uuid}`">
          <WeaponCard :weapon="weapon" uppercase/>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>