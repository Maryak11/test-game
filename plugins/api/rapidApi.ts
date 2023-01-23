import { AxiosResponse } from 'axios';
import { ICard } from '~~/stores/cards';
import { IRuntimeConfig } from '.';

interface IRapidApi {
  getSetCards(): Promise<AxiosResponse<ICard[]>>;
}
export default (o: IRuntimeConfig, instance: Function): IRapidApi => {
  return {
    getSetCards(): Promise<AxiosResponse<ICard[]>> {
      return instance(o).get('/cards/sets/Naxxramas');
    },
  };
};
