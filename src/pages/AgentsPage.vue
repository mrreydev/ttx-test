<script setup>
import { useAgentStore } from '@/stores/agent'
import { onMounted, ref } from 'vue';

const agentStore = useAgentStore()

const agents = ref([])
const fetchAgents = async () => {
  try {
    const resp = await agentStore.getAgents({
      params: {
        isPlayableCharacter: true
      }
    })
    agents.value = resp.data.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchAgents()
})
</script>
<template>
  <HeroBase>
    AGENTS
  </HeroBase>
  <div class="bg-slate-100">
    <div class="container mx-auto py-6">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
        <RouterLink v-for="agent in agents" :key="agent.id" :to="`/agents/${agent.uuid}`">
          <AgentCard :agent="agent" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>