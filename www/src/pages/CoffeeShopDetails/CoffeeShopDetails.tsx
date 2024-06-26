import { useParams } from 'react-router-dom';

import CoffeeImage from '~/assets/coffee.webp';
import CoffeeImage2 from '~/assets/coffee2.webp';
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
  // const coffeeShop = {
  //   name: 'Haus Coffee',
  //   rating: 4.4,
  //   reviews: 429,
  //   location: 'San Francisco, CA',
  //   items: [
  //     {
  //       name: 'Cafè mocha',
  //       description:
  //         'A chocolate-flavored warm beverage that is a variant of a café latte sdf dsf dsf sdf dsf dsf',
  //       price: '$3.00',
  //       imageUrl: CoffeeImage
  //     },
  //     {
  //       name: 'Caramel machiatto',
  //       description: 'Steamed milk marked with an espresso and caramel topping',
  //       price: '$3.50',
  //       imageUrl: CoffeeImage2
  //     }
  //   ]
  // };

  if (!coffeeShop) {
    return null;
  }

  return (
    <div className="">
      <CoverImage imageUrl={CoffeeImage} />
      <CoffeeShopInfo
        name={coffeeShop.name}
        rating={coffeeShop.rating}
        reviews={coffeeShop.reviews}
        location={coffeeShop.location}
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
    </div>
  );
};

export default CoffeeShopDetails;
