import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

import { COLOR, SIZE } from '../../constants/styles';

const Container = styled.div`
  position: fixed;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${SIZE.size16};

  justify-content: center;
  align-content: center;
  place-items: center;

  text-align: center;

  width: 100vw;
  height: 100vh;

  background-color: ${COLOR.white}cc;
`;

const Loader = () => {
  return (
    <Container>
      <Spinner animation="grow" variant="primary" role="status" />
      <span>Loading...</span>
    </Container>
  );
};

export default Loader;
