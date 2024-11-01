
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useWeaponStore } from '@/stores/weapon'

const weaponStore = useWeaponStore()
const route = useRoute()

const weapon = ref({})

onMounted(async () => {
  await fetchWeapon()
})

const fetchWeapon = async () => {
  try {
    const resp = await weaponStore.getWeapon({
      id: route.params.id
    })
    weapon.value = resp.data.data
  } catch (error) {
    console.log(error)
  }
}

</script>
<template>
  <section id="weapon-detail" class="weapon-details bg-slate-100">
    <div class="container mx-auto py-10">
      <div class="flex flex-col-reverse lg:flex-row lg:items-center justify-around gap-4">
        <div class="weapon-info basis-full xl:basis-1/2">
          <h1 class="text-2xl md:text-5xl font-bold uppercase italic color-slate-900 mb-4">
            {{ weapon.displayName }}
          </h1>
          <div v-if="weapon.shopData" class="flex items-center gap-4 mb-8">
            <div class="px-4 py-2 bg-red-500 flex items-center gap-4 w-fit rounded-tl-lg rounded-br-lg">
              <div class="text-base text-white">
                {{ weapon.shopData.category }}
              </div>
            </div>
            <div class="text-base">
              COST : ${{ weapon.shopData.cost }}
            </div>
          </div>
          <div v-if="weapon.weaponStats" class="weapon-stats">
            <div class="text-xl font-bold uppercase mb-4">
              WEAPON STATS
            </div>
            <div class="flex items-center gap-4 lg:gap-8">
              <div class="block">
                <div class="flex items-center mb-3">
                  <IconGun class="me-2 md:me-4" />
                  <div class="text-xs md:text-base uppercase">
                    Firerate
                  </div>
                </div>
                <div class="text-3xl font-bold">
                  {{ weapon.weaponStats.fireRate }}
                </div>
              </div>
              <div class="block">
                <div class="flex items-center mb-3">
                  <IconMagazine class="me-2 md:me-4" />
                  <div class="text-xs md:text-base uppercase">
                    Magazine Size
                  </div>
                </div>
                <div class="text-3xl font-bold">
                  {{ weapon.weaponStats.magazineSize }}
                </div>
              </div>
              <div class="block">
                <div class="flex items-center mb-3">
                  <IconReload class="me-2 md:me-4" />
                  <div class="text-xs md:text-base uppercase">
                    Reload Time
                  </div>
                </div>
                <div class="text-3xl font-bold">
                  {{ weapon.weaponStats.reloadTimeSeconds }} SEC
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="weapon-img basis-full xl:basis-1/2 flex">
          <img :src="weapon.displayIcon" alt="Weapon ICon" class="mx-auto">
        </div>
      </div>
    </div>
    <div v-if="weapon.skins" class="container mx-auto py-10">
      <div class="text-3xl uppercase font-bold mb-8">
        SKINS
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <WeaponCard
          v-for="skin in weapon.skins.slice(0, 8)" :key="skin.uuid"
          :weapon="skin"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  
</style>