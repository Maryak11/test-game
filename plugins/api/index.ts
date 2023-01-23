import instances from './instances';
import rapidApi from './rapidApi';
import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
export interface IRuntimeConfig {
  public: {
    baseURL: string;
    rapidApiToken: string;
    rapidApiHost: string;
  };
}

export default defineNuxtPlugin(() => {
  const config: IRuntimeConfig = useRuntimeConfig();
  return {
    provide: {
      api: {
        rapidApi: () => rapidApi(config, instances.rapidApi),
      },
    },
  };
});
