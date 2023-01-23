<template>
  <div
    class="flex flex-col items-center rounded-md shadow-md p-3 shadow-violet-300 w-[25%] cursor-grab transform hover:scale-105 transition-all"
  >
    <div>{{ card.name }}</div>
    <img
      :src="card.img"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { ICard } from '../stores/cards';
interface Props {
  card: ICard;
}
const props = defineProps<Props>();
</script>
