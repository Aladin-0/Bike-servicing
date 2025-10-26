
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Promo } from './components/Promo';
import { Packages } from './components/Packages';
import { Footer } from './components/Footer';

// Note: The original component files are repurposed to create the new UI.
// For example, Header.tsx now contains the TopBar UI, Hero.tsx contains the Garage view, etc.

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center">
      <div className="bg-dark-bg text-text-light font-sans w-full shadow-2xl flex flex-col">
        <Header />
        <div className="flex-grow p-4 lg:px-8 lg:py-6 overflow-y-auto no-scrollbar">
          <main className="space-y-6">
            <Hero />
            <Services />
            <Promo />
            <Packages />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

// Helper style to hide scrollbar for a more native app feel
const styles = `
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;