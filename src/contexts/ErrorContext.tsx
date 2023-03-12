import { createContext, ReactElement, useContext, useState } from 'react';

import Error from '../components/Error';

type Props = {
  children: ReactElement;
  isAutohide?: boolean;
};

type Context = {
  isError: boolean;
  setIsError: Function;
};

const DEFAULT_VALUES = {
  isError: false,
  setIsError: () => null,
};

const ErrorContext = createContext<Context>(DEFAULT_VALUES);

export const ErrorProvider = (props: Props) => {
  const { children, isAutohide } = props;

  const [isError, setIsError] = useState<Context['isError']>(false);
  const contextValues = { isError, setIsError };

  return (
    <ErrorContext.Provider value={contextValues}>
      {children}

      <Error isAutohide={isAutohide} />
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  return useContext(ErrorContext);
};
