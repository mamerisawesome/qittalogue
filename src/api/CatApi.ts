import Api from './api';

export const getBreeds = async () => {
  const res = await Api.get('/breeds');

  return res.data;
};
