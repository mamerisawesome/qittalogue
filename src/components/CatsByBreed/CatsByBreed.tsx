import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
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
  text-decoration: none;
  transition: background-color 0.5s;

  :hover {
    background-color: ${COLOR.black}aa;
  }
`;

const DetailLink = styled.span`
  border-radius: ${SIZE.size4};
  font-weight: bold;
  color: ${COLOR.white};
  padding: ${SIZE.size4} ${SIZE.size8};
  background-color: ${COLOR.quote};
`;

const CatsByBreed = (props: Props) => {
  const { breedId } = props;

  const { data, isFetching, hasNextPage, fetchNextPage } = useGetBreedById(breedId);

  const breeds = data?.pages?.flatMap((page) => page.data);

  useIsLoading(isFetching);

  const catsDisplay = !!breeds?.length && breeds.map((cat: Image) => (
    <Card key={cat.id} className="cat-card">
      <CardImage src={cat.url} />
      <Card.ImgOverlay as={Overlay} href={`${ROUTES.cat}/${cat.id}`}>
        <DetailLink>
          <FontAwesomeIcon icon={faChevronCircleRight} /> View Details
        </DetailLink>
      </Card.ImgOverlay>
    </Card>
  ));

  const handleShowMore = () => {
    fetchNextPage();
  };

  const showMoreDisplay = hasNextPage && (
    <Button onClick={handleShowMore}>Show More</Button>
  );

  return (
    <div>
      <Row>
        <BackButton href={ROUTES.cat} />
      </Row>

      <Row>
        <CatList>
          {catsDisplay}
        </CatList>

        {showMoreDisplay}
      </Row>
    </div>
  );
};

export default CatsByBreed;
