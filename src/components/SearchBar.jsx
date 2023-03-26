import React from 'react';
import { icon } from '../assets/asset-lists';

function SearchBar() {
  return (
    <div className="w-full">
      <form className="relative w-full">
        <input
          type="text"
          className="block w-full px-[58px] py-[10px] bg-white border border-primary-gray-light text-primary-gray-dark rounded-lg focus:ring-primary-gray-light focus:border-primary-gray-medium"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-[58px] flex items-center pointer-events-none">
          <img className="w-3 h-3" src={icon.search} alt="" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
