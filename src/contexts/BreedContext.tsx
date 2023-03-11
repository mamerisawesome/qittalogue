import { createContext, ReactElement, useContext, useState } from 'react';

type Props = {
  children: ReactElement;
};

type Context = {
  breed: string | null;
  setBreed: Function;
};

const DEFAULT_VALUES = {
  breed: null,
  setBreed: () => null,
};

const BreedContext = createContext<Context>(DEFAULT_VALUES);

export const BreedProvider = (props: Props) => {
  const { children } = props;

  const [breed, setBreed] = useState<Context['breed']>(null);
  const contextValues = { breed, setBreed };

  return (
    <BreedContext.Provider value={contextValues}>
      {children}
    </BreedContext.Provider>
  );
};

export const useBreed = () => {
  return useContext(BreedContext);
};
