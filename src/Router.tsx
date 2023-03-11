import { BrowserRouter, Route, Routes } from "react-router-dom";

export enum ROUTES {
  homepage = '/',
  cat = '/cat',
  catById = '/cat/:id',
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.homepage} element={<div>home</div>} />
        <Route path={ROUTES.cat} element={<div>cat</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
