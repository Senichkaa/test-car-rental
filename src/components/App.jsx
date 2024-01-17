import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../components/pages/HomePage'));
const CatalogPage = lazy(() => import('../components/pages/CatalogPage'));
const FavoritePage = lazy(() => import('../components/pages/FavoritePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
