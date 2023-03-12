import { useEffect } from 'react';

import { useLoader } from '../contexts/LoaderContext';

const useIsLoading = (isLoading: boolean = false) => {
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);
};

export default useIsLoading;
