import styled from 'styled-components';

import { APP_NAME } from '../../constants/global';

const Container = styled.div``;

const Navbar = () => {
  return (
    <Container>
      {APP_NAME}
    </Container>
  );
};

export default Navbar;
