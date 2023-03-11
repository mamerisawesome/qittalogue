import { useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useGetCatById } from '../../api-query/CatQuery';
import useIsLoading from '../../hooks/useIsLoading';
import { ROUTES } from '../../types';

const Container = styled.div``;

const Cat = () => {
  const { id: catId } = useParams();
  const { data, isLoading } = useGetCatById(catId!);

  useIsLoading(isLoading);

  const catInfo = useMemo(() => {
    if (!data?.breeds) {
      return null;
    }

    const breed = (data.breeds)[0];

    return {
      id: data.id,
      url: data.url,
      breedId: breed.id,
      breed: breed.name,
      temperament: breed.temperament,
      description: breed.description,
      origin: breed.origin,
    };
  }, [data]);

  if (!catInfo) {
    return null;
  }

  return (
    <Container>
      <span>Cat</span>

      <Button as="a" href={`${ROUTES.cat}?breed=${catInfo.breedId}`}>Go back</Button>

      <div>
        <img src={catInfo.url} />
        <span>{catInfo.breed}</span>
        <span>{catInfo.origin}</span>
        <span>{catInfo.temperament}</span>
        <span>{catInfo.description}</span>
      </div>
      <div>{JSON.stringify(catInfo)}</div>
    </Container>
  );
};

export default Cat;
