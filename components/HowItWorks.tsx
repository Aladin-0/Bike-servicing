import React from 'react';

const steps = [
  {
    title: 'Select Your Bike',
    description: 'Select a location and choose your bike from our extensive portfolio.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Book a Mechanic',
    description: 'Book a PRAKAS mechanic with a single tap. Then, sit back and relax.',
    image: 'https://images.unsplash.com/photo-1599252501639-013663675179?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Live Tracking',
    description: 'Get real-time tracking of your mechanic with status updates on the app.',
    image: 'https://images.unsplash.com/photo-1627866436324-747e4b515b67?q=80&w=1964&auto=format&fit=crop'
  },
  {
    title: '10 Days Warranty',
    description: 'Rest assured. We provide a 10-day warranty on all bike services & repairs.',
    image: 'https://images.unsplash.com/photo-1581092921447-4a4341513662?q=80&w=2070&auto=format&fit=crop'
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-card-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-premium-light">How PRAKAS Works?</h2>
          <p className="text-premium-gray mt-4">A simple, transparent, and hassle-free process.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-premium-black/50 rounded-2xl overflow-hidden group border border-white/10">
              <div className="overflow-hidden h-48">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-premium-gold mb-2">{`0${index + 1}. ${step.title}`}</h3>
                <p className="text-premium-gray text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};