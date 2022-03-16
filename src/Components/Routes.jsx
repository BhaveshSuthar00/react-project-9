import Navbar  from "./Navbar";
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ProductsDetailsPage from './ProductsDetailsPage';
import NotFoundPage from './NotFoundPage';
export const Routes2 = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={ <HomePage /> } />
        <Route path='/products' element={ <ProductsPage /> } />
        <Route path='/products/:id' element={ <ProductsDetailsPage /> } />
      </Routes>
      {/* Add Routes here */}
    </>
  );
};
