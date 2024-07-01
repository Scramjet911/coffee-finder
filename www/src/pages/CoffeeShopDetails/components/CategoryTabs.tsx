import { Coffee } from 'react-feather';

import Food from '~/assets/crossant.svg';
import Drink from '~/assets/drink.svg';

const CategoryTabs = () => (
  <div className="px-7 py-2">
    <div className="flex space-x-4 text-gray-600 justify-around">
      <button className="flex p-4 py-5 flex-col items-center space-y-1.5 bg-milky_white text-primary font-bold rounded-3xl">
        <Coffee />
        <span>Coffee</span>
      </button>
      <button className="flex p-4 py-5 flex-col items-center space-y-1.5 text-gray-400/65 font-semibold rounded-3xl">
        <img src={Drink} alt="drink" />
        <span>Drinks</span>
      </button>
      <button className="flex p-4 py-5 flex-col items-center space-y-1.5 text-gray-400/65 font-semibold rounded-3xl">
        <img src={Food} alt="food" />
        <span>Food</span>
      </button>
    </div>
  </div>
);

export default CategoryTabs;
