import { Plus } from 'react-feather';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

const MenuItem = ({ name, description, price, imageUrl }: MenuItemProps) => (
  <div className="flex relative items-center justify-between bg-milky_white rounded-3xl p-4 mb-2">
    <div className="flex items-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-[5.5rem] h-28 rounded-2xl object-cover"
      />
      <div className="px-6">
        <h2 className="text-lg font-bold text-primary/90">{name}</h2>
        <p className="text-primary/80 text-sm font-semibold leading-[1rem] pt-1 mb-2 line-clamp-3 test">
          {description}
        </p>
        <p className="text-primary font-bold text-sm">{price}</p>
      </div>
    </div>
    <button className="absolute bg-primary text-white rounded-full p-1 -top-2 -right-2">
      <Plus />
    </button>
  </div>
);

export default MenuItem;
