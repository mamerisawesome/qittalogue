import BootstrapContainer from 'react-bootstrap/Container';
import styled from 'styled-components';

import { APP_NAME } from '../../constants/global';

const Container = styled(BootstrapContainer)``;

const Navbar = () => {
  return (
    <Container>
      {APP_NAME}
    </Container>
  );
};

export default Navbar;
