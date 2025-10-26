import React from 'react';
import { GarageIcon, RoadsideAssistanceIcon, ProfileIcon } from './IconComponents';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-element/50">
      <div className="w-full px-4 lg:px-8 flex justify-around items-center py-3 lg:justify-center lg:gap-24">
        <button className="flex flex-col items-center space-y-1 text-accent-yellow">
          <GarageIcon className="w-7 h-7" />
          <span className="text-xs font-semibold">My garage</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-text-gray">
          <RoadsideAssistanceIcon className="w-7 h-7 text-accent-red" />
          <span className="text-xs font-semibold">Roadside assistance</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-text-gray">
          <ProfileIcon className="w-7 h-7" />
          <span className="text-xs font-semibold">Profile</span>
        </button>
      </div>
    </footer>
  );
};
