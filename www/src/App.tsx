import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';

import './App.css';

import router from './routes';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API}>
      <RouterProvider router={router} />
    </APIProvider>
  </Provider>
);

export default App;
