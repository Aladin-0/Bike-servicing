import React from 'react';
import { CoinIcon, DigitalKeyIcon, BellIcon } from './IconComponents';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-2 lg:px-0 lg:max-w-7xl lg:mx-auto">
      <div className="flex items-center space-x-2 border border-accent-yellow/30 rounded-full py-1 pl-1 pr-3 lg:py-2 lg:pr-5 bg-dark-card">
        <div className="bg-accent-yellow rounded-full p-1 lg:p-2">
          <CoinIcon className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
        </div>
        <span className="font-bold text-md lg:text-lg text-text-light">0</span>
      </div>
      <div className="flex items-center space-x-3 lg:space-x-4">
        <button className="p-2 lg:p-3 border-2 border-accent-yellow rounded-full hover:bg-accent-yellow/10 transition-colors">
            <DigitalKeyIcon className="w-6 h-6 lg:w-7 lg:h-7 text-text-light"/>
        </button>
        <button className="p-3 lg:p-4 bg-dark-card rounded-xl hover:bg-dark-element transition-colors">
          <BellIcon className="w-6 h-6 lg:w-7 lg:h-7 text-text-light" />
        </button>
      </div>
    </header>
  );
};