import axios, { AxiosRequestHeaders, RawAxiosRequestHeaders } from 'axios';

import { API_URL } from '../constants/api';

const DEFAULT_HEADERS = {
  'x-api-key': process.env.REACT_APP_API_KEY,
};

const Api = axios.create({ baseURL: API_URL });

Api.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      ...DEFAULT_HEADERS as RawAxiosRequestHeaders,
    } as AxiosRequestHeaders,
  };
});

const handleError = () => {
  window.location.assign('/error');
};

Api.interceptors.response.use((res) => res, handleError);

export default Api;
