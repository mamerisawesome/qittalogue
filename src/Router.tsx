import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cat from './pages/Cat';
import Cats from './pages/Cats';
import { ROUTES } from './types';

const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.homepage} element={<Cats />} />
          <Route path={ROUTES.catById} element={<Cat />} />
          <Route path={ROUTES.cat} element={<Cats />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default Router;
