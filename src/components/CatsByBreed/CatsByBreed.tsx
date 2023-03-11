import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { useGetBreedById } from '../../api-query/CatQuery';
import { COLOR, SIZE } from '../../constants/styles';
import useIsLoading from '../../hooks/useIsLoading';
import { Image, ROUTES } from '../../types';
import BackButton from '../BackButton';

type Props = {
  breedId: string;
};

const CatList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${SIZE.size16};
`;

const CardImage = styled(Card.Img)`
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.a`
  width: 100%;
  height: 100%;

  background-color: ${COLOR.black}00;
  color: ${COLOR.white}00;
  text-decoration: none;
  transition: background-color 0.5s, color 0.25s;

  :hover {
    color: ${COLOR.white}aa;
    background-color: ${COLOR.black}aa;
  }
`;

const DetailLink = styled.span`
  border-radius: ${SIZE.size4};
  font-weight: bold;
`;

const CatsByBreed = (props: Props) => {
  const { breedId } = props;

  const { data, isLoading } = useGetBreedById(breedId);

  useIsLoading(isLoading);

  const catsDisplay = !!data?.length && data.map((cat: Image) => (
    <Card key={cat.id} className="cat-card">
      <CardImage src={cat.url} />
      <Card.ImgOverlay as={Overlay} href={`${ROUTES.cat}/${cat.id}`}>
        <DetailLink>
          <FontAwesomeIcon icon={faChevronCircleRight} /> View Details
        </DetailLink>
      </Card.ImgOverlay>
    </Card>
  ));

  return (
    <div>
      <Row>
        <BackButton href={ROUTES.cat} />
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
