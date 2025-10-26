import React from 'react';
import { GarageIcon, RoadsideAssistanceIcon, ProfileIcon } from './IconComponents';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-dark-card/90 backdrop-blur-sm rounded-b-[38px] md:rounded-b-[38px] lg:rounded-none">
      <div className="flex justify-around items-center py-3 lg:py-5 lg:max-w-4xl lg:mx-auto lg:gap-12">
        <button className="flex flex-col items-center space-y-1 text-accent-yellow hover:scale-105 transition-transform lg:flex-row lg:space-y-0 lg:space-x-3 lg:px-6 lg:py-3 lg:rounded-full lg:bg-accent-yellow/10">
          <GarageIcon className="w-7 h-7 lg:w-8 lg:h-8" />
          <span className="text-xs lg:text-sm font-semibold">My garage</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-text-gray hover:scale-105 transition-transform hover:text-accent-red lg:flex-row lg:space-y-0 lg:space-x-3 lg:px-6 lg:py-3 lg:rounded-full lg:hover:bg-accent-red/10">
          <RoadsideAssistanceIcon className="w-7 h-7 lg:w-8 lg:h-8 text-accent-red" />
          <span className="text-xs lg:text-sm font-semibold">Roadside assistance</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-text-gray hover:scale-105 transition-transform hover:text-accent-yellow lg:flex-row lg:space-y-0 lg:space-x-3 lg:px-6 lg:py-3 lg:rounded-full lg:hover:bg-dark-element">
          <ProfileIcon className="w-7 h-7 lg:w-8 lg:h-8" />
          <span className="text-xs lg:text-sm font-semibold">Profile</span>
        </button>
      </div>
      <div className="w-32 h-1 bg-white rounded-full mx-auto mb-2 md:block lg:hidden"></div>
    </footer>
  );
};