import { useQuery } from 'react-query';

import * as CatApi from '../api/CatApi';

const QUERY_KEYS = {
  getAllBreed: 'breeds',
};

export const useGetAllBreed = () => (
  useQuery([QUERY_KEYS.getAllBreed], CatApi.getBreeds)
);
