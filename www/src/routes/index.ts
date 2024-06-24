import { createBrowserRouter } from 'react-router-dom';

import CoffeeShopDetails from '~/pages/CoffeeShopDetails/CoffeeShopDetails';
import CoffeeShopListing from '~/pages/CoffeeShopListing/CoffeeShopListing';

const router = createBrowserRouter([
  {
    path: '/',
    Component: CoffeeShopListing
  },
  {
    path: '/:id/',
    Component: CoffeeShopDetails
  }
]);

export default router;
