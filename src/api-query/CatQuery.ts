import { useQuery } from 'react-query';

import * as CatApi from '../api/CatApi';
import { Breed } from '../types';

const QUERY_KEYS = {
  breed: 'breed',
  cat: 'cat',
};

export const useGetAllBreed = (searchQuery: string = '') => (
  useQuery([QUERY_KEYS.breed], CatApi.getBreeds, {
    select: (data: Breed[]) => data
      .filter(({ name }) => name.includes(searchQuery))
      .map((opt) => ({
        id: opt.id,
        name: opt.name,
        description: opt.description,
      })),
  })
);

export const useGetBreedById = (breedId: string, page?: number) => (
  useQuery(
    [QUERY_KEYS.breed, breedId],
    () => CatApi.getBreedById(breedId, { page }),
  )
);

export const useGetCatById = (catId: string) => (
  useQuery([QUERY_KEYS.cat, catId], () => CatApi.getCatById(catId), { enabled: !!catId })
);
