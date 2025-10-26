import React from 'react';

const reasons = [
    {
        title: "Doorstep Two-Wheeler Service & Repair",
        description: "Get doorstep bike service and repair be it at Home, Office, or on the road."
    },
    {
        title: "Trained Professional Mechanics",
        description: "Highly trained PRAKAS Fast Bike Services & electricians who offer the best two wheeler services!"
    },
    {
        title: "Competitive and Transparent Pricing",
        description: "PRAKAS Fast Bike Service prices are the most reasonable ones. You can save up to 40%."
    },
    {
        title: "Customer Support with 100% Satisfaction",
        description: "If you get stuck, just contact us. Our experienced PRAKAS Bike Services will solve your query."
    }
];

export const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 bg-premium-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-premium-light">Why choose PRAKAS for Bike Services?</h2>
                    <p className="text-premium-gray mt-4 max-w-3xl mx-auto">
                        At PRAKAS, we offer a wide variety of best bike services with world-class modern maintenance services. Minimum contact bike servicing ensures safety and satisfaction.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-card-black p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-premium-gold mb-2">{reason.title}</h3>
                            <p className="text-premium-gray">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};