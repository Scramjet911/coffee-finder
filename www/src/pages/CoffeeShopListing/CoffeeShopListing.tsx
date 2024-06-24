import { User } from 'react-feather';

import CoffeeImage from '~/assets/coffee.webp';
import CoffeeImage2 from '~/assets/coffee2.webp';
import { BottomNavigation, Header, Search } from '~/components';

import FeaturedCoffeeShops from './components/FeaturedShopList';

const coffeeShops = [
  {
    image: CoffeeImage,
    name: 'Home Coffee Roasters',
    rating: 4.5,
    reviews: 1200,
    distance: 3.8
  },
  {
    image: CoffeeImage2,
    name: 'Haus Coffee',
    rating: 4.4,
    reviews: 429,
    distance: 2.5
  },
  {
    image: CoffeeImage,
    name: 'Home Coffee Roasters',
    rating: 4.5,
    reviews: 1200,
    distance: 3.8
  },
  {
    image: CoffeeImage2,
    name: 'Haus Coffee',
    rating: 4.4,
    reviews: 429,
    distance: 2.5
  },
  {
    image: CoffeeImage,
    name: 'Home Coffee Roasters',
    rating: 4.5,
    reviews: 1200,
    distance: 3.8
  },
  {
    image: CoffeeImage2,
    name: 'Haus Coffee',
    rating: 4.4,
    reviews: 429,
    distance: 2.5
  }
];

const CoffeeShopListing = () => (
  <>
    <div className="min-h-screen p-6 sm:p-10">
      <div className="flex w-full justify-end">
        <User className="text-gray-400" />
      </div>
      <div className="flex w-full flex-col md:flex-row md:justify-between">
        <Header />
        <Search />
      </div>
      <FeaturedCoffeeShops coffeeShops={coffeeShops} />
    </div>
    <BottomNavigation />
  </>
);

export default CoffeeShopListing;
