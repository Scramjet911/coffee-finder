import { Bookmark, Heart, Home, User } from 'react-feather';

const BottomNavigation = () => (
  <div className="sticky bottom-0 w-full bg-white shadow-inner p-2 flex justify-around">
    <button className="bg-primary/90 text-white px-5 py-3 rounded-3xl">
      <Home />
    </button>
    <button className="text-gray-400/70">
      <Heart />
    </button>
    <button className="text-gray-400/70">
      <Bookmark />
    </button>
    <button className="text-gray-400/70">
      <User />
    </button>
  </div>
);

export default BottomNavigation;
