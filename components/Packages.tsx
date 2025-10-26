import React from 'react';
import { FuelIcon, CarServiceIcon } from './IconComponents';

const FeatureCard: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="bg-dark-card rounded-3xl p-4 flex flex-col justify-between h-40">
    <div className="w-12 h-12 bg-dark-element rounded-xl flex items-center justify-center">
        {icon}
    </div>
    <h3 className="text-xl font-bold text-text-light">{title}</h3>
  </div>
);

export const Packages: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
          <FeatureCard title="Fuel" icon={<FuelIcon className="w-7 h-7 text-accent-yellow" />} />
          <FeatureCard title="Car services" icon={<CarServiceIcon className="w-7 h-7 text-accent-yellow" />} />
      </div>
    </section>
  );
};
