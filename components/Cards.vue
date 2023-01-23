<template>
  <VueDraggableNext
    class="dragArea list-group w-full flex justify-between gap-3"
    :list="cardsStore.filteredCards"
    :group="{ name: 'people', pull: 'clone', put: false }"
    :sort="true"
  >
    <Card
      v-for="card in cardsStore.filteredCards"
      :key="card.dbfId"
      :card="card"
    />
  </VueDraggableNext>
</template>

<script setup lang="ts">
import { useCardsStore } from '../stores/cards';
import { VueDraggableNext } from 'vue-draggable-next';
const cardsStore = useCardsStore();

onMounted(async () => {
  await cardsStore.getAllCards();
  cardsStore.getThreeCards();
});
</script>
