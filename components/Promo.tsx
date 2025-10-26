import React from 'react';

const ParkingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <p className={className}>P</p>
);

export const Promo: React.FC = () => {
  return (
    <section className="px-2 space-y-3 lg:px-0 lg:space-y-4">
        <div className="bg-dark-card rounded-full p-4 lg:p-6 flex justify-between items-center lg:max-w-5xl lg:mx-auto">
            <div className="flex items-center space-x-3 lg:space-x-5">
                <div className="bg-accent-yellow text-black rounded-full w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center font-bold text-xl lg:text-3xl">
                    <ParkingIcon />
                </div>
                <div>
                    <h2 className="text-md lg:text-xl font-bold text-text-light">Active parking</h2>
                    <p className="text-text-gray text-sm lg:text-base">St. B. Khmelnitsiy 12</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-mono font-semibold text-md lg:text-xl text-text-light">00:48:31</p>
                <p className="text-text-gray text-sm lg:text-base">28 &#x20B4;</p>
            </div>
        </div>
        <p className="text-center text-text-gray text-sm lg:text-base font-medium">4 new activities</p>
    </section>
  );
};