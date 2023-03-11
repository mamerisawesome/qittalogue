import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cat from './pages/Cat';
import Cats from './pages/Cats';

import Homepage from './pages/Homepage';

export enum ROUTES {
  homepage = '/',
  cat = '/cat',
  catById = '/cat/:id',
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.homepage} element={<Homepage />} />
        <Route path={ROUTES.catById} element={<Cat />} />
        <Route path={ROUTES.cat} element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
