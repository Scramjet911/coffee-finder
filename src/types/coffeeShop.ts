export interface CoffeeShopFilters {
  name?: string;
  location?: {
    point: number[];
    radius: number;
  }
  minRating?: string;
  maxRating?: string;
}