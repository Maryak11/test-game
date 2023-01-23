<template>
  <div class="customContainer flex justify-center">
    <div
      v-if="!startGame"
      class="w-[20%] flex flex-col gap-3 p-4"
    >
      <button
        class="shadow-xl w-full shadow-violet-100 bg-violet-200 p-2 rounded-md hover:bg-violet-700 hover:text-white cursor-pointer transition-all"
        @click="startGame = true"
      >
        START
      </button>
    </div>

    <Board v-if="startGame" />
  </div>
</template>
<script setup lang="ts">
import { useEnemyStore } from '~~/stores/enemy';
const enemyStore = useEnemyStore();
const startGame = ref<boolean>(false);

watch(
  () => enemyStore.damage,
  (nv) => {
    if (enemyStore.health - nv <= 0) {
      startGame.value = false;
      enemyStore.reset();
    }
  },
);
</script>
