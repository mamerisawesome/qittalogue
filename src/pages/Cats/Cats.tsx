import { useEffect } from 'react';
import BootstrapContainer from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { useGetAllBreed } from '../../api-query/CatQuery';
import { useLoader } from '../../contexts/LoaderContext';

const Container = styled(BootstrapContainer)``;

const Cats = () => {
  const { setIsLoading } = useLoader();
  const { isLoading } = useGetAllBreed();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return (
    <Container>
      <Row>
        Cats
      </Row>

      <Row>
        <Form.Label htmlFor="breed-select">Breed</Form.Label>
        <Form.Control
          id="breed-select"
          type="search"
        />
      </Row>
    </Container>
  );
};

export default Cats;
