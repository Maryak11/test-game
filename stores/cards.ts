import { defineStore } from 'pinia';
import getThreeRandomElements from '~~/helpers/getThreeRandomElements';

interface mechanicType {
  name: string;
}
export interface ICard {
  cardId: string;
  dbfId: number;
  name: string;
  cardSet: string;
  type: string;
  health: number;
  playerClass: string;
  img?: string;
  locale: string;
  mechanics: mechanicType[];
  faction?: string;
  rarity?: string;
  attack?: number;
  flavor?: string;
  collectible?: boolean;
  race?: string;
}

export const useCardsStore = defineStore('cards', () => {
  const { $api } = useNuxtApp();
  const cards = ref<ICard[]>([]);
  const filteredCards = ref<ICard[]>([]);

  const getAllCards = async () => {
    const { data } = await $api.rapidApi().getSetCards();
    cards.value = data;
  };

  const getThreeCards = () => {
    filteredCards.value = [];
    const cardsWithImgOnly: ICard[] = getCardsWithImgOnly();
    filteredCards.value = getThreeRandomElements(cardsWithImgOnly);
  };

  const getCardsWithImgOnly = (): ICard[] => {
    return cards.value.filter((card) => card.img);
  };

  return {
    filteredCards,
    cards,
    getAllCards,
    getThreeCards,
  };
});
