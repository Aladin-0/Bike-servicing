import React from 'react';
import { StarIcon } from './IconComponents';

const testimonials = [
  { name: 'Puneet Nahar', role: 'Lawyer', text: "Pulling a 100 kg motorbike on a highway under the hot sun... Thanks to PRAKAS Fast Bike Service for saving all the useless hard work.", avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Nikhil Gautam', role: 'Banker', text: "I was looking for Go Mechanic Bike service but found PRAKAS. This bike service app worked as a time saver with free pickup & drop services.", avatar: 'https://randomuser.me/api/portraits/men/76.jpg' },
  { name: 'Nidhi Pahal', role: 'Teacher', text: "Excellent experience with PRAKAS Fast Bike Service. Assigned PRAKAS was polite, informative and friendly.", avatar: 'https://randomuser.me/api/portraits/women/75.jpg' },
  { name: 'Garima Gandhi', role: 'Architect', text: "Best online scooter servicing app for two wheelers. More transparent & cost effective. You can track all service updates via the app.", avatar: 'https://randomuser.me/api/portraits/women/76.jpg' },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-premium-gold">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-premium-gold' : 'text-premium-gray/30'}`} />
        ))}
    </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-card-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-premium-light">Customer Speaks</h2>
          <p className="text-premium-gray mt-4">What PRAKAS customers say about us</p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <Rating rating={5} />
            <span className="text-premium-light font-bold">Rated 4.6 on Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-premium-black/50 p-6 rounded-2xl border border-white/10 relative">
              <svg className="absolute top-4 left-4 w-12 h-12 text-premium-gold/10" fill="currentColor" viewBox="0 0 32 32"><path d="M9.33,26.5A1.5,1.5,0,0,1,7.83,25V17.17a1.5,1.5,0,0,1,1.5-1.5H12a1.5,1.5,0,0,1,1.5,1.5V25a1.5,1.5,0,0,1-1.5,1.5ZM4.5,26.5A1.5,1.5,0,0,1,3,25V13.5A1.5,1.5,0,0,1,4.5,12H7.83V7.83A1.5,1.5,0,0,1,9.33,6.33h3.34a1.5,1.5,0,0,1,1.5,1.5V15.67H12a1.5,1.5,0,0,1-1.5-1.5v-1.5H9.33v4.67H12a1.5,1.5,0,0,1,1.5,1.5V25a1.5,1.5,0,0,1-1.5,1.5Z M22.67,26.5a1.5,1.5,0,0,1-1.5-1.5V17.17a1.5,1.5,0,0,1,1.5-1.5H25.33a1.5,1.5,0,0,1,1.5,1.5V25a1.5,1.5,0,0,1-1.5,1.5ZM17.83,26.5a1.5,1.5,0,0,1-1.5-1.5V13.5A1.5,1.5,0,0,1,1.5-1.5h3.34V7.83a1.5,1.5,0,0,1,1.5-1.5h3.34a1.5,1.5,0,0,1,1.5,1.5V15.67H25.33a1.5,1.5,0,0,1-1.5-1.5v-1.5H22.67v4.67H25.33a1.5,1.5,0,0,1,1.5,1.5V25a1.5,1.5,0,0,1-1.5,1.5Z"></path></svg>
              <p className="text-premium-gray mb-4 italic z-10 relative">"{testimonial.text}"</p>
              <div className="flex items-center z-10 relative">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-premium-gold/50" />
                <div>
                  <p className="font-bold text-premium-light">{testimonial.name}</p>
                  <p className="text-sm text-premium-gray">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};