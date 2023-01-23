<template>
  <div class="rounded-md shadow-md p-4 mb-4">
    <div class="rounded-md border flex justify-center p-2 w-full relative z-[10000]">
      <div
        ref="progressHealth"
        class="absolute z-[1] top-0 left-0 bg-green-400 rounded-md h-full transition-all"
      ></div>
      <div class="flex z-[10000]">
        {{ enemyStore.health - enemyStore.damage > 0 ? enemyStore.health - enemyStore.damage : 0 }}
        xp
      </div>
    </div>
    <div class="relative flex justify-center">
      <VueDraggableNext
        class="w-full absolute top-0 left-0 h-full"
        :list="enemyStore.attackList"
        group="people"
      >
      </VueDraggableNext>
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Hearthstone-PNG.png"
        alt=""
        class="w-[60%]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next';
import randomValue from '~~/helpers/randomValue';
import { ICard } from '~~/stores/cards';
import { useEnemyStore } from '~~/stores/enemy';
const enemyStore = useEnemyStore();
const progressHealth = ref<HTMLDivElement | null>(null);

watch(enemyStore.attackList, () => {
  enemyStore.damage += randomValue();
  changeWidhtHealth();
});

const changeWidhtHealth = () => {
  if (progressHealth.value) {
    progressHealth.value.style.width =
      enemyStore.healthProcent > 0 ? enemyStore.healthProcent + '%' : 0 + '%';
  }
};

onMounted(() => {
  changeWidhtHealth();
});
</script>
