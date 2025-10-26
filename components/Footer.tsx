import React from 'react';
import { GarageIcon, RoadsideAssistanceIcon, ProfileIcon } from './IconComponents';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-dark-card/90 backdrop-blur-sm rounded-b-[38px]">
      <div className="flex justify-around items-center py-3">
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
      <div className="w-32 h-1 bg-white rounded-full mx-auto mb-2"></div>
    </footer>
  );
};