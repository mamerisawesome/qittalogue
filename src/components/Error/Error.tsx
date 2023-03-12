import { faBug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toast from "react-bootstrap/Toast";
import styled from "styled-components";

import { SIZE } from "../../constants/styles";
import { useError } from "../../contexts/ErrorContext";

type Props = {
  isAutohide?: boolean;
  onClose?: Function;
};

const Container = styled.div`
  position: absolute;
  bottom: ${SIZE.size32};
  right: ${SIZE.size32};
`;

const AUTOHIDE_TIMEOUT = 10000;

const Error = (props: Props) => {
  const { isAutohide, onClose } = props;

  const { isError, setIsError } = useError();

  const handleClose = () => {
    if (!onClose) {
      return setIsError(false);
    }

    onClose();
  };

  return (
    <Container>
      <Toast
        show={isError}
        delay={AUTOHIDE_TIMEOUT}
        autohide={isAutohide}
        onClose={handleClose}
      >
        <Toast.Header>
          <FontAwesomeIcon icon={faBug} />
          <strong className="me-auto">Woops! Something went wrong!</strong>
        </Toast.Header>
        <Toast.Body>
          We know you love cats and we love them too! Try refreshing the page again later. If that does not work, then let us know!
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default Error;
