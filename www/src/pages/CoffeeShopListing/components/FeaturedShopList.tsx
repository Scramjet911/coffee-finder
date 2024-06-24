import React from 'react';
import { Link } from 'react-router-dom';

import CoffeeShopCard from './CoffeeShopCard';

interface CoffeeShop {
  image: string;
  name: string;
  rating: number;
  reviews: number;
  distance: number;
}

interface FeaturedShopListProps {
  coffeeShops: CoffeeShop[];
}

const FeaturedShopList: React.FC<FeaturedShopListProps> = ({ coffeeShops }) => (
  <div className="py-4">
    <h2 className="text-xl font-semibold mb-4 text-primary">
      Featured coffee shops
    </h2>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {coffeeShops.map((shop) => (
        <div className="sm:[&:nth-child(2n)]:pt-4 lg:[&:nth-child(2n)]:pt-0 lg:[&:nth-child(3n-1)]:pt-4">
          <Link to={`/${shop.name}`}>
            <CoffeeShopCard key={shop.name} {...shop} />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedShopList;
