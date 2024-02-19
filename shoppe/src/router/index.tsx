import { ProductsProvider } from '@contexts/ProductsContext';
import CartPage from '@pages/CartPage';
import { Homepage } from '@pages/Homepage';
import LoginPage from '@pages/LoginPage';
import ProductDetailPage from '@pages/ProductDetailPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProductsProvider>
        <Homepage />
      </ProductsProvider>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

export { router };
