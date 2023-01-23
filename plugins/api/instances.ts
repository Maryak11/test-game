import axios, { AxiosInstance } from 'axios';
import { IRuntimeConfig } from '.';

const instances = {
  rapidApi: (c: IRuntimeConfig) => {
    const instance: AxiosInstance = axios.create({
      baseURL: c.public.baseURL,
      headers: {
        'X-RapidAPI-Key': c.public.rapidApiToken,
        'X-RapidAPI-Host': c.public.rapidApiHost,
      },
    });
    return instance;
  },
};

export default instances;
