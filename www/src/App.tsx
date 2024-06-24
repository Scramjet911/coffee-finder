import { RouterProvider } from 'react-router-dom';

// import CoffeeShopDetails from '~/pages/CoffeeShopDetails/CoffeeShopDetails';
// import CoffeeShopListing from '~/pages/CoffeeShopListing/CoffeeShopListing';
import './App.css';

import router from './routes';

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

export default App;
