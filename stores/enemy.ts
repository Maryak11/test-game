import { defineStore } from 'pinia';

import { ICard } from './cards';

export const useEnemyStore = defineStore('enemy', () => {
  const attackList = reactive<ICard[]>([]);
  const health = ref<number>(30);
  const damage = ref<number>(0);

  const healthProcent = computed((): number => {
    if (damage.value === 0) return 100;
    if (damage.value >= 0) return 100 - (damage.value * 100) / 30;
    return 0;
  });

  const reset = () => {
    health.value = 30;
    damage.value = 0;
    attackList.length = 0;
  };

  return {
    attackList,
    health,
    damage,
    healthProcent,
    reset,
  };
});
