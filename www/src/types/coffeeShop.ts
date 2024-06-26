export interface StoreLocation {
  type: 'Point';
  coordinates: number[];
}

export interface CoffeeShop {
  id: string;
  name: string;
  location: StoreLocation;
  address: string;
  rating: number;
  reviews: number;
  image: string;
}

export interface CoffeeShopFilters {
  name?: string;
  location?: {
    point: number[];
    radius: number;
  };
  minRating?: string;
  maxRating?: string;
}
