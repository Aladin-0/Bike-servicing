import React from 'react';
import { CheckCircleIcon } from './IconComponents';

const benefits = [
  {
    title: '10 days Free Service Guarantee',
    description: '10 days unconditional warranty on our services.'
  },
  {
    title: 'Transparent & Competitive Pricing',
    description: 'Save up to 40% on your bike service bills.'
  },
  {
    title: 'Free Pickup & Drop Service',
    description: 'Hassle-free bike pickup and delivery at your convenience.'
  },
  {
    title: 'Trained & Expert Mechanics',
    description: 'Only certified and experienced two-wheeler mechanics.'
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-premium-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-premium-light">PRAKAS Fast Bike Service Benefits</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircleIcon className="w-8 h-8 text-premium-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-premium-light">{benefit.title}</h3>
                <p className="text-premium-gray">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center border border-premium-gold/30 bg-premium-gold/5 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-premium-gold">First-Time Offer</h3>
            <p className="text-premium-light mt-2 text-lg">Get <span className="font-bold">₹100 off</span> services for first time customers!</p>
        </div>
      </div>
    </section>
  );
};