import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import BreedSearch from '../../components/BreedSearch';
import CatsByBreed from '../../components/CatsByBreed';

const Container = styled.div``;

const Cats = () => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const breedDisplay = !selectedBreed
    ? <BreedSearch setBreed={setSelectedBreed} />
    : <CatsByBreed breedId={selectedBreed} />;

  return (
    <Container>
      <Row>
        Cats
      </Row>

      <Row>
        {breedDisplay}
      </Row>
    </Container>
  );
};

export default Cats;
