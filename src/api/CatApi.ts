import { ITEMS_PER_PAGE } from '../constants/pagination';
import { Pagination } from '../types';

import Api from './api';

export const getBreeds = async () => {
  const res = await Api.get('/breeds');

  return res.data;
};

export const getBreedById = async (breedId: string, pagination?: Pagination) => {
  const res = await Api.get('/images/search', {
    params: {
      page: pagination ?? 1,
      limit: ITEMS_PER_PAGE,
      breed_id: breedId,
    }
  });

  return res.data;
};
