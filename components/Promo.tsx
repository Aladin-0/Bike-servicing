import React from 'react';

const ParkingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <p className={className}>P</p>
);

export const Promo: React.FC = () => {
  return (
    <section className="space-y-3">
        <div className="bg-dark-card rounded-full p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <div className="bg-accent-yellow text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                    <ParkingIcon />
                </div>
                <div>
                    <h2 className="text-md font-bold text-text-light">Active parking</h2>
                    <p className="text-text-gray text-sm">St. B. Khmelnitsiy 12</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-mono font-semibold text-md text-text-light">00:48:31</p>
                <p className="text-text-gray text-sm">28 &#x20B4;</p>
            </div>
        </div>
        <p className="text-left text-text-gray text-sm font-medium">4 new activities</p>
    </section>
  );
};
