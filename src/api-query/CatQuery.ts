import { useQuery } from 'react-query';

import * as CatApi from '../api/CatApi';
import { Breed } from '../types';

const QUERY_KEYS = {
  breed: 'breeds',
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
