import React from 'react';
import { PlusCircleIcon } from './IconComponents';

export const Hero: React.FC = () => {
  return (
    <section className="px-2 lg:px-0">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex-1">
          <h1 className="text-3xl lg:text-5xl font-bold text-text-light">Skoda Rapid :</h1>
          <div className="flex items-center space-x-4 text-text-gray mt-1 lg:mt-3">
            <span className="lg:text-lg">AA0533BE</span>
            <button className="flex items-center space-x-1 hover:text-accent-yellow transition-colors lg:text-lg">
              <span>Add mileage</span>
              <PlusCircleIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>
        <div className="relative mt-4 lg:mt-0 lg:flex-1 lg:max-w-xl">
          <img
            src="https://i.imgur.com/yKeaR1Y.png"
            alt="Skoda Rapid"
            className="w-full h-auto object-contain transform scale-125 lg:scale-110"
          />
           <div className="absolute inset-x-0 bottom-2 w-full flex justify-center items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-accent-yellow rounded-full"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              <span className="w-5 h-5 flex items-center justify-center text-gray-400 text-lg -ml-1">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};