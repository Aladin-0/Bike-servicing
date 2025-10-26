import React from 'react';
import { FuelIcon, CarServiceIcon } from './IconComponents';

const FeatureCard: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="bg-dark-card rounded-3xl p-4 lg:p-6 flex flex-col justify-between h-40 lg:h-52 hover:bg-dark-element/50 transition-colors cursor-pointer">
    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-dark-element rounded-xl flex items-center justify-center">
        <div className="lg:scale-125">{icon}</div>
    </div>
    <h3 className="text-xl lg:text-2xl font-bold text-text-light">{title}</h3>
  </div>
);

export const Packages: React.FC = () => {
  return (
    <section className="px-2 lg:px-0">
      <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:max-w-4xl lg:mx-auto">
          <FeatureCard title="Fuel" icon={<FuelIcon className="w-7 h-7 text-accent-yellow" />} />
          <FeatureCard title="Car services" icon={<CarServiceIcon className="w-7 h-7 text-accent-yellow" />} />
      </div>
    </section>
  );
};