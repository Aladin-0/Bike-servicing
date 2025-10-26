import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="bg-card-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-premium-gold/20">
          <div className="text-center px-12 py-4 md:py-0">
            <p className="text-5xl font-bold text-premium-gold">4.6/5</p>
            <p className="text-premium-gray mt-2">on Google Reviews</p>
          </div>
          <div className="text-center px-12 py-4 md:py-0">
            <p className="text-5xl font-bold text-premium-gold">1,00,000+</p>
            <p className="text-premium-gray mt-2">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};