import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import BreedSearch from '../../components/BreedSearch';

const Container = styled.div``;

const Cats = () => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const breedDisplay = !selectedBreed
    ? <BreedSearch setBreed={setSelectedBreed} />
    : null;

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
