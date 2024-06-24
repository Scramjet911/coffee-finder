import { Heart } from 'react-feather';

interface CoffeeShopCardProps {
  image: string;
  name: string;
  rating: number;
  reviews: number;
  distance: number;
}

const CoffeeShopCard = ({
  image,
  name,
  rating,
  reviews,
  distance
}: CoffeeShopCardProps) => (
  <div className="rounded-lg overflow-hidden">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover border rounded-3xl"
      />
      <button className="absolute -top-2 -right-2 rounded-full p-2 bg-gray-100 border-4 border-white">
        <Heart />
      </button>
    </div>
    <div className="py-4">
      <h2 className="font-bold text-lg text-primary/90">{name}</h2>
      <div className="flex items-center my-2">
        <span className="text-yellow-500 text-2xl">★</span>
        <span className="text-primary/90 font-bold"> {rating}</span>
        <span className="text-gray-300 ml-2 font-bold">{reviews} reviews</span>
      </div>
      <p className="text-primary/90 font-bold">{distance} miles</p>
    </div>
  </div>
);

export default CoffeeShopCard;
