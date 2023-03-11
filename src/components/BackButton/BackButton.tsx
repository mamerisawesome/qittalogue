import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';

import { COLOR, SIZE } from '../../constants/styles';

type Props = {
  href: string;
};


const Container = styled.div`
  position: fixed;
  top: ${SIZE.size24};
  left: ${SIZE.size24};
  z-index: 10;

  a {
    background-color: ${COLOR.quote}99;
    border-color: ${COLOR.quote}99;
    border-radius: ${SIZE.size24};
  }

  a:hover, a:active, a:focus {
    background-color: ${COLOR.quote};
    border-color: ${COLOR.quote};
  }

  svg {
    color: white;
    fill: white;
  }
`;

const BackButton = (props: Props) => {
  const { href } = props;

  return (
    <Container>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip>Go Back</Tooltip>
        }
      >
        <Button as="a" href={href} variant="success">
          <FontAwesomeIcon icon={faArrowLeft} color={COLOR.white} />
        </Button>
      </OverlayTrigger>
    </Container>
  );
};

export default BackButton;
