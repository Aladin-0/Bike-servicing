import React from 'react';
import { CoinIcon, DigitalKeyIcon, BellIcon } from './IconComponents';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 lg:px-8 pt-8">
      <div className="flex items-center space-x-2 border border-accent-yellow rounded-full py-1 pl-1 pr-3 bg-dark-card">
        <div className="bg-accent-yellow rounded-full p-1">
          <CoinIcon className="w-4 h-4 text-black" />
        </div>
        <span className="font-bold text-md text-text-light">0</span>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 border border-accent-yellow rounded-full">
            <DigitalKeyIcon className="w-6 h-6 text-text-light"/>
        </button>
        <button className="p-2 bg-dark-card rounded-full">
          <BellIcon className="w-6 h-6 text-text-light" />
        </button>
      </div>
    </header>
  );
};
