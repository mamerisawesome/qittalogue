import { useEffect, useMemo, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import BreedSearch from '../../components/BreedSearch';
import CatsByBreed from '../../components/CatsByBreed';
import { APP_NAME } from '../../constants/global';

const Container = styled.div``;

const Cats = () => {
  const [params] = useSearchParams();
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const breedParameter = useMemo(() => params.get('breed'), [params]);

  const breedDisplay = !selectedBreed
    ? <BreedSearch setBreed={setSelectedBreed} />
    : <CatsByBreed breedId={selectedBreed} />;

  useEffect(() => {
    if (breedParameter) {
      setSelectedBreed(breedParameter);
    }
  }, [breedParameter]);

  return (
    <Container>
      <Row>
        <h2>{APP_NAME}</h2>
      </Row>

      <Row>
        {breedDisplay}
      </Row>
    </Container>
  );
};

export default Cats;
