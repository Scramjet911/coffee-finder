import { useEffect, useState } from 'react';
import { User } from 'react-feather';

import { BottomNavigation, Header, Search } from '~/components';
import { useLazyGetAllCoffeeShopsQuery } from '~/services/coffeeShopService';

import { useDebounce } from '../hooks/useDebounce';
import FeaturedCoffeeShops from './components/FeaturedShopList';

const CoffeeShopListing = () => {
  const [fetchCoffeeShops, data] = useLazyGetAllCoffeeShopsQuery();
  const [searchTerm, setSearchTerm] = useState<string>();

  const debounced_search = useDebounce(
    (search) => fetchCoffeeShops({ name: search }),
    500
  );

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    debounced_search(search);
  };

  useEffect(() => {
    fetchCoffeeShops({});
  }, [fetchCoffeeShops]);
  return (
    <>
      <div className="min-h-screen p-6 sm:p-10">
        <div className="flex w-full justify-end">
          <User className="text-gray-400" />
        </div>
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <Header />
          <Search searchTerm={searchTerm} setSearchTerm={handleSearch} />
        </div>
        <FeaturedCoffeeShops coffeeShops={data.data} />
      </div>
      <BottomNavigation />
    </>
  );
};

export default CoffeeShopListing;
