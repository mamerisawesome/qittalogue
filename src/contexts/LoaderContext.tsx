import { createContext, ReactElement, useContext, useState } from 'react';

import Loader from '../components/Loader';

type Props = {
  children: ReactElement;
};

type Context = {
  isLoading: boolean;
  setIsLoading: Function;
};

const DEFAULT_VALUES = {
  isLoading: false,
  setIsLoading: () => null,
};

const LoaderContext = createContext<Context>(DEFAULT_VALUES);

export const LoaderProvider = (props: Props) => {
  const { children } = props;

  const [isLoading, setIsLoading] = useState(false);

  const contextValues = { isLoading, setIsLoading };

  const loaderDisplay = isLoading && (
    <Loader />
  );

  return (
    <LoaderContext.Provider value={contextValues}>
      {loaderDisplay}

      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
