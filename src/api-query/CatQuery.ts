import { useQuery } from 'react-query';

import * as CatApi from '../api/CatApi';
import { Breed } from '../types';

const QUERY_KEYS = {
  getAllBreed: 'breeds',
};

export const useGetAllBreed = (searchQuery: string = '') => (
  useQuery([QUERY_KEYS.getAllBreed], CatApi.getBreeds, {
    select: (data: Breed[]) => data
      .filter(({ name }) => name.includes(searchQuery))
      .map((opt) => ({
        id: opt.id,
        name: opt.name,
        description: opt.description,
      })),
  })
);
