interface CoffeeShopInfoProps {
  name: string;
  rating: number;
  reviews: number;
  address: string;
}

const CoffeeShopInfo = ({
  name,
  rating,
  reviews,
  address
}: CoffeeShopInfoProps) => (
  <div className="pt-6 px-10 rounded-t-[2rem] -translate-y-6 bg-white">
    <h1 className="text-2xl font-bold text-primary/90">{name}</h1>
    <div className="flex items-center text-gray-700">
      <span className="text-yellow-500 text-2xl">★</span>
      <span className="ml-1 text-primary/90 font-bold text-sm">{rating}</span>
      <span className="ml-2 font-bold text-gray-300 text-sm">
        {reviews} reviews
      </span>
    </div>
    <p className="text-primary/90 font-bold text-sm">{address}</p>
  </div>
);

export default CoffeeShopInfo;
