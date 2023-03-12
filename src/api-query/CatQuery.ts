import { InfiniteData, useInfiniteQuery, useQuery } from 'react-query';

import * as CatApi from '../api/CatApi';
import { Breed, Image } from '../types';
import { PaginatedResponse } from '../types/api';

const QUERY_KEYS = {
  breed: 'breed',
  cat: 'cat',
};

export const useGetAllBreed = (searchQuery: string = '') => (
  useQuery([QUERY_KEYS.breed, searchQuery], CatApi.getBreeds, {
    select: (data: Breed[]) => data
      .filter(({ name }) => name.includes(searchQuery))
      .map((opt) => ({
        id: opt.id,
        name: opt.name,
        description: opt.description,
      })),
  })
);

export const useGetBreedById = (breedId: string) => (
  useInfiniteQuery(
    [QUERY_KEYS.breed, breedId],
    ({ pageParam = 1 }): Promise<PaginatedResponse<Image>> => CatApi.getBreedById(breedId, { page: pageParam }),
    {
      select: (data) => {
        const lastPage = data.pages.at(-1) ?? { data: [] };
        const restPages = data.pages.slice(0, -1);
        const allIds = restPages.flatMap((page) => page.data.map((cat) => cat.id));

        return {
          ...data,
          pages: [
            ...restPages,
            {
              ...lastPage,
              data: lastPage.data
                .filter((cat) => !allIds.includes(cat.id))
                .sort((a, b) => a.id.localeCompare(b.id)),
            },
          ],
        };
      },
      getNextPageParam: (lastPage: PaginatedResponse<Image>) => {
        return lastPage.pagination.nextCursor;
      },
    },
  )
);

export const useGetCatById = (catId: string) => (
  useQuery([QUERY_KEYS.cat, catId], () => CatApi.getCatById(catId), { enabled: !!catId })
);
