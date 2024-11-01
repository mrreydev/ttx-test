<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAgentStore } from '@/stores/agent'

const agentStore = useAgentStore()
const route = useRoute()

const agent = ref({})

onMounted(async () => {
  await fetchAgent()
})

const fetchAgent = async () => {
  try {
    const resp = await agentStore.getAgent({
      id: route.params.id
    })
    agent.value = resp.data.data
  } catch (error) {
    console.log(error)
  }
}

</script>
<template>
  <section id="agent-detail" class="agent-detail bg-slate-100" >
    <div class="container mx-auto py-6">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-around gap-4">
        <div class="agent-info basis-1/2">
          <h1 class="text-3xl md:text-5xl font-bold uppercase italic color-slate-900 mb-4">
            {{ agent.displayName }}
          </h1>
          <p class="text-base w-full lg:w-3/4 mb-4">
            {{ agent.description }}
          </p>
          <div v-if="agent.role" class="px-4 py-2 bg-red-500 flex items-center gap-4 w-fit rounded-tl-lg rounded-br-lg mb-10">
            <div class="text-base text-white">
              {{ agent.role.displayName }}
            </div>
            <img :src="agent.role.displayIcon" alt="Role Icon" class="w-4">
          </div>
          <div class="abilities">
            <div class="text-xl uppercase font-bold text-slate-900 mb-4">
              Special Abilities
            </div>
            <div v-if="agent.abilities" class="grid grid-cols-2 gap-4 lg:flex items-center">
              <div v-for="ability in agent.abilities" :key="ability.slot" class="flex flex-col justify-center text-center p-4 bg-slate-600 rounded-tl-lg rounded-br-lg">
                 <img :src="ability.displayIcon" alt="" class="w-3/4 mb-3 mx-auto">
                 <p class="text-base text-white">
                    {{ ability.displayName }}
                 </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="agent-image basis-1/2 bg-center bg-no-repeat bg-contain"
          :style="{
            backgroundImage: `url('${agent.background}')`
          }"
        >
          <img :src="agent.bustPortrait" alt="" class="w-full">
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  
</style>