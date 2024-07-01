import { useParams } from 'react-router-dom';

import CustomMap from '~/components/CustomMap';
import { useGetCoffeeShopByIdQuery } from '~/services/coffeeShopService';
import { useGetAllProductsByShopIdQuery } from '~/services/shopProductService';

import CategoryTabs from './components/CategoryTabs';
import CoffeeShopInfo from './components/CoffeeShopInfo';
import CoverImage from './components/CoverImage';
import MenuItem from './components/MenuItem';

const CoffeeShopDetails = () => {
  const { id } = useParams();

  const { data: coffeeShop } = useGetCoffeeShopByIdQuery(id ?? '');
  const { data: shopItems = [] } = useGetAllProductsByShopIdQuery(id ?? '');

  if (!coffeeShop) {
    return null;
  }

  return (
    <div>
      <CoverImage imageUrl={coffeeShop.image} />
      <CoffeeShopInfo
        name={coffeeShop.name}
        rating={coffeeShop.rating}
        reviews={coffeeShop.reviews}
        address={coffeeShop.address}
      />
      <CategoryTabs />
      <div className="px-6 py-2">
        {shopItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.image}
          />
        ))}
      </div>
      {coffeeShop?.location ? (
        <CustomMap location={coffeeShop.location} />
      ) : null}
    </div>
  );
};

export default CoffeeShopDetails;
