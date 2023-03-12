import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

import { APP_NAME } from "../../constants/global";
import { useError } from "../../contexts/ErrorContext";
import { ROUTES } from "../../types";

const ErrorPage = () => {
  const { setIsError } = useError();
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    setIsError(false);
    navigate(ROUTES.homepage);
  };

  useEffect(() => {
    setIsError(true);

    return () => {
      setIsError(false);
    };
  }, [setIsError]);

  return (
    <Container>
      <h2>{APP_NAME}</h2>
      <Button variant="link" onClick={handleHomeRedirect}>Go back to home for now!</Button>
    </Container>
  );
};

export default ErrorPage;
