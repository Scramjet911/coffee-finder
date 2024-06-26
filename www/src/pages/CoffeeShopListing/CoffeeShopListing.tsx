import { User } from 'react-feather';

import { BottomNavigation, Header, Search } from '~/components';
import { useGetAllCoffeeShopsQuery } from '~/services/coffeeShopService';

import FeaturedCoffeeShops from './components/FeaturedShopList';

const CoffeeShopListing = () => {
  const { data } = useGetAllCoffeeShopsQuery();

  return (
    <>
      <div className="min-h-screen p-6 sm:p-10">
        <div className="flex w-full justify-end">
          <User className="text-gray-400" />
        </div>
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <Header />
          <Search />
        </div>
        <FeaturedCoffeeShops coffeeShops={data} />
      </div>
      <BottomNavigation />
    </>
  );
};

export default CoffeeShopListing;
