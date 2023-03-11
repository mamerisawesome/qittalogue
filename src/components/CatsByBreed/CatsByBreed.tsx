import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

import { useGetBreedById } from "../../api-query/CatQuery";
import { SIZE } from "../../constants/styles";
import useIsLoading from "../../hooks/useIsLoading";
import { Image, ROUTES } from "../../types";

type Props = {
  breedId: string;
};

const BackButton = styled(Button)`
  margin: ${SIZE.size16} ${SIZE.size0};
`;

const CatList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${SIZE.size16};
`;

const CardImage = styled(Card.Img)`
  height: 250px;
`;

const CatsByBreed = (props: Props) => {
  const { breedId } = props;

  const { data, isLoading } = useGetBreedById(breedId);

  useIsLoading(isLoading);

  const catsDisplay = !!data?.length && data.map((cat: Image) => (
    <Card key={cat.id}>
      <CardImage src={cat.url} />
      <Card.Body>
        <Button as="a" variant="primary" href={`${ROUTES.cat}/${cat.id}`}>View Details</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <Row>
        <BackButton as="a" href={ROUTES.cat}>
          {'<-'} Go Back
        </BackButton>
      </Row>

      <Row>
        <CatList>
          {catsDisplay}
        </CatList>
      </Row>
    </div>
  );
};

export default CatsByBreed;
