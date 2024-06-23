import { useState } from 'react';
import { Search as SearchIcon } from 'react-feather';

import FilterIcon from '../assets/slider.svg';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex items-center space-x-2 py-4">
      <div className="relative flex w-full md:w-auto">
        {!isFocused && !inputValue && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon size={18} className="text-gray-400" />
            <span className="ml-2 text-gray-400">Search</span>
          </span>
        )}
        <input
          type="text"
          className="w-full p-2 pl-4 border rounded-xl focus:outline-none bg-gray-100"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <button className="p-3.5 bg-primary text-white rounded-xl">
        <img src={FilterIcon} alt="slider-icon" width={16} />
      </button>
    </div>
  );
};

export default Search;
