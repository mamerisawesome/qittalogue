import { ChangeEvent, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useGetAllBreed } from '../../api-query/CatQuery';
import { COLOR, FONT_SIZE, SIZE } from '../../constants/styles';
import useIsLoading from '../../hooks/useIsLoading';
import { ROUTES } from '../../types';

const Options = styled(Card)`
  position: relative;
  margin-top: ${SIZE.size8};

  overflow-y: scroll;
  max-height: 70vh;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${SIZE.size8} ${SIZE.size16};
  cursor: pointer;

  :not(:first-child) {
    border-top: ${SIZE.size1} solid ${COLOR.quote};
  }

  .name {
    font-weight: bold;
    color: ${COLOR.primary};
  }

  .description {
    color: ${COLOR.quote};
    font-size: ${FONT_SIZE.secondary};
  }
`;

const BreedSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading } = useGetAllBreed(searchQuery);
  const navigate = useNavigate();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelect = (breedId: string) => {
    setSearchQuery('');
    navigate(`${ROUTES.cat}?breed=${breedId}`);

  };

  const breedSearchResultsDisplay = !!data?.length && (
    <Options>
      {data.map((opt) => (
        <Option key={opt.id} onClick={() => handleSelect(opt.id)}>
          <span className="name">{opt.name}</span>
          <span className="description">{opt.description}</span>
        </Option>
      ))}
    </Options>
  );

  useIsLoading(isLoading);

  return (
    <Form.Group>
      <Form.Control
        id="breed-select"
        type="search"
        placeholder="Search for Breed"
        value={searchQuery}
        onChange={handleSearch}
      />

      {breedSearchResultsDisplay}
    </Form.Group>
  );
};

export default BreedSearch;
