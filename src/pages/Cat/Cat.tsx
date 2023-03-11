import { useMemo } from 'react';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useGetCatById } from '../../api-query/CatQuery';
import BackButton from '../../components/BackButton';
import { COLOR, SIZE } from '../../constants/styles';
import useIsLoading from '../../hooks/useIsLoading';
import { ROUTES } from '../../types';

const Profile = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
`;

const CatImage = styled(Image)`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  place-self: end;
`;

const Information = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  padding: ${SIZE.size64};

  text-align: left;

  background-color: ${COLOR.backdrop};
`;

const InfoItems = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;

  & > * {
    padding: ${SIZE.size8} ${SIZE.size0};
  }
`;

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
    <div>
      <BackButton href={`${ROUTES.cat}?breed=${catInfo.breedId}`} />

      <Profile>
        <CatImage src={catInfo.url} />
        <Information>
          <InfoItems>
            <h1>{catInfo.breed}</h1><span />
            <b>Origin</b> <span>{catInfo.origin}</span>
            <b>Temperament</b> <span>{catInfo.temperament}</span>
            <b>Description</b> <span>{catInfo.description}</span>
          </InfoItems>
        </Information>
      </Profile>
    </div>
  );
};

export default Cat;
